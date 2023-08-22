import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';

describe('AuthorsService', () => {
  let service: AuthorsService;

  const mockQueryBuilder = {
    where: jest.fn(() => mockQueryBuilder),
    andWhere: jest.fn(() => mockQueryBuilder),
    getMany: jest.fn(() => []),
  };

  const mockAuthorsRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((author) =>
        Promise.resolve({ id: Date.now(), ...author }),
      ),
    createQueryBuilder: jest.fn().mockImplementation(() => mockQueryBuilder),
    findOneBy: jest.fn().mockImplementation(({ id }) => {
      return { id, firstName: 'Iva', lastName: 'Ivanova' };
    }),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorsService,
        {
          provide: getRepositoryToken(Author),
          useValue: mockAuthorsRepository,
        },
      ],
    }).compile();

    service = module.get<AuthorsService>(AuthorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create author method', () => {
    it('should create new author', async () => {
      const author = await service.createAuthor({
        firstName: 'Iva',
        lastName: 'Ivanova',
      });
      expect(author).toEqual({
        id: expect.any(Number),
        firstName: 'Iva',
        lastName: 'Ivanova',
      });
    });
  });

  describe('Find authors method', () => {
    it('should find authors', async () => {
      const authors = await service.findAuthors({});
      expect(authors).toEqual([]);
    });
  });

  describe('Find author method', () => {
    it('should find author by id', async () => {
      const authorId = 1;
      const author = await service.findAuthor(authorId);
      expect(author).toEqual({ id: 1, firstName: 'Iva', lastName: 'Ivanova' });
    });
  });

  describe('Update author method', () => {
    it('should update author by id', async () => {
      const authorId = 1;
      const updateDto = { firstName: 'Eva', lastName: 'Malinova' };
      const author = await service.updateAuthor(authorId, updateDto);
      expect(author).toEqual({ id: 1, firstName: 'Eva', lastName: 'Malinova' });
    });
  });

  describe('Remove author method', () => {
    it('should remove author by id', async () => {
      const authorId = 1;
      const author = await service.removeAuthor(authorId);
      expect(author).toEqual(undefined);
    });
  });
});
