import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { FiltersAuthorDto } from './dto/filters-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {}

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    try {
      const newAuthor = this.authorsRepository.create(createAuthorDto);
      return await this.authorsRepository.save(newAuthor);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      }

      throw error;
    }
  }

  async findAuthors(filtersDto: FiltersAuthorDto): Promise<Author[]> {
    const { firstName, lastName } = filtersDto;

    const query = this.authorsRepository.createQueryBuilder('author');

    if (firstName) {
      query.andWhere('author.first_name ILIKE :firstName', {
        firstName: `%${firstName}%`,
      });
    }

    if (lastName) {
      query.andWhere('author.last_name ILIKE :lastName', {
        lastName: `%${lastName}%`,
      });
    }

    // this is how we can log the raw query
    // console.log(query.getSql())

    return await query.getMany();
  }

  async findAuthor(id: number): Promise<Author> {
    const author = await this.authorsRepository.findOneBy({ id });

    if (!author) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }

    return author;
  }

  async updateAuthor(
    id: number,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    const author = await this.findAuthor(id);

    return this.authorsRepository.save({ ...author, ...updateAuthorDto });
  }

  async removeAuthor(id: number): Promise<void> {
    const author = await this.findAuthor(id);
    await this.authorsRepository.remove(author);
    return;
  }
}
