import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { FiltersAuthorDto } from './dto/filters-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

describe('AuthorsController', () => {
  let controller: AuthorsController;

  const mockAuthorsService = {
    createAuthor: jest.fn().mockImplementation((dto) => {
      return { id: Date.now(), ...dto };
    }),
    findAuthors: jest.fn().mockImplementation(() => {
      return [
        {
          id: 1,
          firstName: 'Iva',
          lastName: 'Ivanova',
        },
        {
          id: 2,
          firstName: 'Miro',
          lastName: 'Petrov',
        },
      ];
    }),
    findAuthor: jest.fn().mockImplementation((id) => {
      return { id, firstName: 'Iva', lastName: 'Ivanova' };
    }),
    updateAuthor: jest.fn().mockImplementation((id, dto) => {
      return { id, ...dto };
    }),
    removeAuthor: jest.fn().mockImplementation(() => {
      return;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsController],
      providers: [AuthorsService],
    })
      // override the AuthorsService with custom value, because here we are only interested in testing the controller
      .overrideProvider(AuthorsService)
      .useValue(mockAuthorsService)
      .compile();

    controller = module.get<AuthorsController>(AuthorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create author method', () => {
    it('should create a author', () => {
      const createAuthorDto: CreateAuthorDto = {
        firstName: 'Iva',
        lastName: 'Ivanova',
      };

      expect(controller.createAuthor(createAuthorDto)).toEqual({
        id: expect.any(Number),
        firstName: 'Iva',
        lastName: 'Ivanova',
      });

      expect(mockAuthorsService.createAuthor).toHaveBeenCalledTimes(1);
      expect(mockAuthorsService.createAuthor).toHaveBeenCalledWith(
        createAuthorDto,
      );
    });
  });

  describe('Find authors method', () => {
    it('should find authors', () => {
      const filtersDto: FiltersAuthorDto = {};

      const authorsResult = controller.findAuthors(filtersDto);
      expect(authorsResult).toEqual([
        {
          id: 1,
          firstName: 'Iva',
          lastName: 'Ivanova',
        },
        {
          id: 2,
          firstName: 'Miro',
          lastName: 'Petrov',
        },
      ]);
      expect(authorsResult).toHaveLength(2);
      expect(mockAuthorsService.findAuthors).toHaveBeenCalledTimes(1);
    });
  });

  describe('Find author method', () => {
    it('should find author by id', () => {
      const params = { id: 1 };

      const authorResult = controller.findAuthor(params);
      expect(authorResult).toEqual({
        id: 1,
        firstName: 'Iva',
        lastName: 'Ivanova',
      });
      expect(mockAuthorsService.findAuthor).toHaveBeenCalledTimes(1);
    });
  });

  describe('Update author method', () => {
    it('should update author by id', () => {
      const params = { id: 1 };
      const updateAuthorDto: UpdateAuthorDto = {
        firstName: 'Margo',
        lastName: 'Stefanova',
      };

      const authorResult = controller.updateAuthor(params, updateAuthorDto);
      expect(authorResult).toEqual({
        id: 1,
        firstName: 'Margo',
        lastName: 'Stefanova',
      });
      expect(mockAuthorsService.updateAuthor).toHaveBeenCalledTimes(1);
    });
  });

  describe('Remove author method', () => {
    it('should remove author by id', () => {
      const params = { id: 1 };

      const authorResult = controller.removeAuthor(params);
      expect(authorResult).toEqual(undefined);
      expect(mockAuthorsService.removeAuthor).toHaveBeenCalledTimes(1);
    });
  });
});
