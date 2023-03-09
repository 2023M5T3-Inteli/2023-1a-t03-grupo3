import { Test, TestingModule } from '@nestjs/testing';
import { requestService } from './request.service';

describe('requestService', () => {
  let service: requestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [requestService],
    }).compile();

    service = module.get<requestService>(requestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


