import { Test, TestingModule } from '@nestjs/testing';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';

describe('RankingController', () => {
  let rankingController: RankingController;
  let rankingService: RankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankingController],
      providers: [RankingService],
    }).compile();
    rankingController = module.get<RankingController>(RankingController);
    rankingService = module.get<RankingService>(RankingService);
  });

  it('should be defined', () => {
    expect(rankingController).toBeDefined();
    expect(rankingService).toBeDefined();
  });

  describe('# ranking list', () => {
    it('should not list and rank', async () => {
      const mock: CreateRankingDto[] = [
        { username: 'Austin', rating: 12 },
        { username: 'Edward', rating: 15 },
      ];
      jest
        .spyOn(rankingService, 'findAll')
        .mockImplementation(async () => mock);
      expect(await rankingController.findAll()).toBe(mock);
    });

    it('should list and rank', async () => {
      const mock: CreateRankingDto[] = [
        { username: 'Austin', rating: 15 },
        { username: 'Edward', rating: 12 },
      ];
      jest
        .spyOn(rankingService, 'findAll')
        .mockImplementation(async () => mock);
      expect(await rankingController.findAll()).toBe(mock);
    });
  });

  describe('# user ranking by id', () => {
    it('should not get an especific user position', async () => {
      const mock = [
        {id: 2, username: 'Austin', rating: 12 },
      ];
      jest
        .spyOn(rankingService, 'findOne')
        .mockImplementation(async () => mock);
      expect(await rankingController.findOne(1)).toBe(mock);
    });

    it('should get an especific user position', async () => {
      const mock = [
        { id: 1, username: 'Austin', rating: 12 },
      ];
      jest
        .spyOn(rankingService, 'findOne')
        .mockImplementation(async () => mock);
      expect(await rankingController.findOne(1)).toBe(mock);
    });
  });
});
