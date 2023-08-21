import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FiltersBookDto } from './dto/filters-book.dto';
import { Book } from './entities/book.entity';
import { Author } from '../authors/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {}

  async createBook(createBookDto: CreateBookDto) {
    const { authorId } = createBookDto;

    const author = await this.authorsRepository.findOneBy({
      id: authorId,
    });
    if (!author) {
      throw new NotFoundException(`Author with id '${authorId}' not found`);
    }

    const newBook = this.booksRepository.create({
      ...createBookDto,
      author,
    });

    return await this.booksRepository.save(newBook);
  }

  async findBooks(filtersDto: FiltersBookDto) {
    const { title, year } = filtersDto;

    const query = this.booksRepository.createQueryBuilder('book');

    if (title) {
      query.andWhere('book.title ILIKE :title', {
        title: `%${title}%`,
      });
    }

    if (year) {
      query.andWhere('book.year = :year', { year });
    }

    return await query.getMany();
  }

  async findBook(id: number): Promise<Book> {
    const book = await this.booksRepository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return book;
  }

  async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const { authorId } = updateBookDto;

    const author = await this.authorsRepository.findOneBy({
      id: authorId,
    });
    if (!author) {
      throw new NotFoundException(`Author with id '${authorId}' not found`);
    }

    const book = await this.findBook(id);

    return this.booksRepository.save({ ...book, ...updateBookDto });
  }

  async removeBook(id: number): Promise<void> {
    const book = await this.findBook(id);
    await this.booksRepository.remove(book);
    return;
  }
}
