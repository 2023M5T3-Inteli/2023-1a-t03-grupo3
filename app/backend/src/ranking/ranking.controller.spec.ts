import { Test, TestingModule } from '@nestjs/testing';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';

describe('RankingController', () => {
  let controller: RankingController;
  let service: RankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankingController],
      providers: [RankingService],
    }).compile();

    controller = module.get<RankingController>(RankingController);
    service = module.get<RankingService>(RankingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('should verify ranking', () => {
    it('should list and sort all ranks', async () => {
      const resultExpected = [
        { name: 'Austin', score: 50 },
        { name: 'Edward', score: 20 },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => resultExpected);

      expect(await controller.findAll()).toBe(resultExpected);
    });
    it('should not list and sort all ranks', async () => {
      const resultExpected = [
        { name: 'Austin', score: 50 },
        { name: 'Edward', score: 20 },
      ];
      const result = [
        { name: 'Edward', score: 20 },
        { name: 'Austin', score: 50 },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => resultExpected);

      expect(await controller.findAll()).not.toBe(result);
    });

    it('should select an especific person', async () => {
      const mock = [
        { id: 4, name: 'Austin', score: 50 },
      ];
  
      const mockResult = [{name:'Austin', score: 50}]
      jest.spyOn(service, 'findOne').mockImplementation(() => mock);
  
      expect(await service.findOne(4)).toBe(mockResult);
    });
  });
});
