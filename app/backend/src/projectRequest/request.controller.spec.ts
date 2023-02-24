import { Test, TestingModule } from '@nestjs/testing';
import { requestController } from './request.controller';
import { requestService } from './request.service';

describe('requestController', () => {
  let appController: requestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [requestController],
      providers: [requestService],
    }).compile();

    appController = app.get<requestController>(requestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
