import { Test, TestingModule } from '@nestjs/testing';
import { requestController } from './request.controller';
import { requestService } from './request.service';

describe('requestController', () => {
  let controller: requestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [requestController],
      providers: [requestService],
    }).compile();

    controller = module.get<requestController>(requestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});




