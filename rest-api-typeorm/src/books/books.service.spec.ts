import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { Author } from '../authors/entities/author.entity';

describe('BooksService', () => {
  let service: BooksService;

  const mockQueryBuilder = {
    where: jest.fn(() => mockQueryBuilder),
    andWhere: jest.fn(() => mockQueryBuilder),
    getMany: jest.fn(() => []),
  };

  const mockBooksRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((book) =>
        Promise.resolve({ id: Date.now(), ...book }),
      ),
    createQueryBuilder: jest.fn().mockImplementation(() => mockQueryBuilder),
    findOneBy: jest.fn().mockImplementation(({ id }) => {
      return { id, title: 'My Book', year: 2023, authorId: 1 };
    }),
    remove: jest.fn(),
  };

  const mockAuthorsRepository = {
    findOneBy: jest.fn().mockImplementation(({ id }) => {
      return { id, firstName: 'Iva', lastName: 'Ivanova' };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: mockBooksRepository,
        },
        {
          provide: getRepositoryToken(Author),
          useValue: mockAuthorsRepository,
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create book method', () => {
    it('should create new book', async () => {
      const book = await service.createBook({
        title: 'My Book',
        year: 2023,
        authorId: 1,
      });
      expect(book).toEqual({
        id: expect.any(Number),
        title: 'My Book',
        year: 2023,
        authorId: 1,
        author: {
          firstName: 'Iva',
          id: 1,
          lastName: 'Ivanova',
        },
      });
    });
  });

  describe('Find books method', () => {
    it('should find books', async () => {
      const books = await service.findBooks({});
      expect(books).toEqual([]);
    });
  });

  describe('Find book method', () => {
    it('should find book by id', async () => {
      const bookId = 1;
      const book = await service.findBook(bookId);
      expect(book).toEqual({
        id: 1,
        title: 'My Book',
        year: 2023,
        authorId: 1,
      });
    });
  });

  describe('Update book method', () => {
    it('should update book by id', async () => {
      const bookId = 1;
      const updateDto = { title: 'My Book 22', year: 2023 };
      const author = await service.updateBook(bookId, updateDto);
      expect(author).toEqual({
        id: 1,
        title: 'My Book 22',
        year: 2023,
        authorId: 1,
      });
    });
  });

  describe('Remove book method', () => {
    it('should remove book by id', async () => {
      const bookId = 1;
      const book = await service.removeBook(bookId);
      expect(book).toEqual(undefined);
    });
  });
});
