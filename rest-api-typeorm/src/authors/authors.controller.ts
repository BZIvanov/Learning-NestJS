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
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import {
  FindAuthorParams,
  UpdateAuthorParams,
  RemoveAuthorParams,
} from './dto/params-author.dto';
import { FiltersAuthorDto } from './dto/filters-author.dto';
import { Author } from './entities/author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.createAuthor(createAuthorDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAuthors(@Query() filtersDto: FiltersAuthorDto): Promise<Author[]> {
    return this.authorsService.findAuthors(filtersDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findAuthor(@Param() params: FindAuthorParams): Promise<Author> {
    return this.authorsService.findAuthor(+params.id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateAuthor(
    @Param() params: UpdateAuthorParams,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    return this.authorsService.updateAuthor(+params.id, updateAuthorDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAuthor(@Param() params: RemoveAuthorParams): Promise<void> {
    return this.authorsService.removeAuthor(+params.id);
  }
}
