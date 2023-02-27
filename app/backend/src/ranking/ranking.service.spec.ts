import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { RankingService } from './ranking.service';

describe('RankingService', () => {
  let service: RankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RankingService],
      imports: [AppModule],
    }).compile();

    service = module.get<RankingService>(RankingService);
  });

  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(module).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should list and sort all ranks', () => {
    const rankingMock = [
      { name: 'Yves', score: 40 },
      { name: 'Austin', score: 50},
      { name: 'Edward', score: 20 },
    ];
    const mockResult = [
      { name: 'Austin', score: 50 },
      { name: 'Yves', score: 40 },
      { name: 'Edward', score: 20 },
    ];
    
    expect(rankingMock).toBe(mockResult);
  });
});
