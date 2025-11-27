import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockGetHello = jest.fn().mockReturnValue('Mocked Hello');

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: mockGetHello,
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return mocked value', () => {
      expect(appController.getHello()).toBe('Mocked Hello');
      expect(mockGetHello).toHaveBeenCalledTimes(1);
    });
  });
});
