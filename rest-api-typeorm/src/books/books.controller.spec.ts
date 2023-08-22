import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FiltersBookDto } from './dto/filters-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

describe('BooksController', () => {
  let controller: BooksController;

  const mockBooksService = {
    createBook: jest.fn().mockImplementation((dto) => {
      return { id: Date.now(), ...dto };
    }),
    findBooks: jest.fn().mockImplementation(() => {
      return [
        {
          id: 1,
          title: 'My Book',
          year: 2023,
          authorId: 1,
        },
      ];
    }),
    findBook: jest.fn().mockImplementation((id) => {
      return { id, title: 'My Book', year: 2023, authorId: 1 };
    }),
    updateBook: jest.fn().mockImplementation((id, dto) => {
      return { id, ...dto };
    }),
    removeBook: jest.fn().mockImplementation(() => {
      return;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    })
      .overrideProvider(BooksService)
      .useValue(mockBooksService)
      .compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create book method', () => {
    it('should create a book', () => {
      const createBookDto: CreateBookDto = {
        authorId: 1,
        title: 'My Book',
        year: 2023,
      };

      expect(controller.createBook(createBookDto)).toEqual({
        id: expect.any(Number),
        title: 'My Book',
        year: 2023,
        authorId: 1,
      });

      expect(mockBooksService.createBook).toHaveBeenCalledTimes(1);
      expect(mockBooksService.createBook).toHaveBeenCalledWith(createBookDto);
    });
  });

  describe('Find books method', () => {
    it('should find books', () => {
      const filtersDto: FiltersBookDto = {};

      const booksResult = controller.findBooks(filtersDto);
      expect(booksResult).toEqual([
        {
          id: 1,
          title: 'My Book',
          year: 2023,
          authorId: 1,
        },
      ]);
      expect(booksResult).toHaveLength(1);
      expect(mockBooksService.findBooks).toHaveBeenCalledTimes(1);
    });
  });

  describe('Find book method', () => {
    it('should find book by id', () => {
      const params = { id: 1 };

      const bookResult = controller.findBook(params);
      expect(bookResult).toEqual({
        id: 1,
        title: 'My Book',
        year: 2023,
        authorId: 1,
      });
      expect(mockBooksService.findBook).toHaveBeenCalledTimes(1);
    });
  });

  describe('Update book method', () => {
    it('should update book by id', () => {
      const params = { id: 1 };
      const updateBookDto: UpdateBookDto = {
        title: 'Second Edition',
        year: 2023,
      };

      const bookResult = controller.updateBook(params, updateBookDto);
      expect(bookResult).toEqual({
        id: 1,
        title: 'Second Edition',
        year: 2023,
      });
      expect(mockBooksService.updateBook).toHaveBeenCalledTimes(1);
    });
  });

  describe('Remove book method', () => {
    it('should remove book by id', () => {
      const params = { id: 1 };

      const bookResult = controller.removeBook(params);
      expect(bookResult).toEqual(undefined);
      expect(mockBooksService.removeBook).toHaveBeenCalledTimes(1);
    });
  });
});
