import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {
  FindBookParams,
  RemoveBookParams,
  UpdateBookParams,
} from './dto/params-book.dto';
import { FiltersBookDto } from './dto/filters-book.dto';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(createBookDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findBooks(@Query() filtersDto: FiltersBookDto): Promise<Book[]> {
    return this.booksService.findBooks(filtersDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findBook(@Param() params: FindBookParams): Promise<Book> {
    return this.booksService.findBook(+params.id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateBook(
    @Param() params: UpdateBookParams,
    @Body() updateBookDto: UpdateBookDto,
  ): any {
    return this.booksService.updateBook(+params.id, updateBookDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeBook(@Param() params: RemoveBookParams): Promise<void> {
    return this.booksService.removeBook(+params.id);
  }
}
