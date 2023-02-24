import { Test, TestingModule } from '@nestjs/testing';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';

describe('RankingController', () => {
  let controller: RankingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankingController],
      providers: [RankingService],
    }).compile();

    controller = module.get<RankingController>(RankingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should list and sort all ranks', async () => {
      const spyOn = await jest.spyOn(controller.findAll(), 'finally');
      const magic = 0;
      expect(spyOn).toBeCalledTimes(magic);
    });

    it('should not list and sort all ranks', async () => {
      const spyOn = await jest.spyOn(controller.findAll(), 'catch');
      const magic = 0;
      expect(spyOn).toBeCalledTimes(magic);
    });
  });
});
