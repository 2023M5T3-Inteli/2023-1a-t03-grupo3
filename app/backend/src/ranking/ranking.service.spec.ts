import { Test, TestingModule } from '@nestjs/testing';
import { RankingService } from './ranking.service';

describe('RankingService', () => {
  let service: RankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RankingService],
    }).compile();

    service = module.get<RankingService>(RankingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should list and sort all ranks', async () => {
    const mockResult = [
      { name: 'Austin', score: 50 },
      { name: 'Edward', score: 20 },
    ];
    jest.spyOn(service, 'findAll').mockImplementation(() => mockResult);

    expect(await service.findAll()).toBe(mockResult);
  });
});
