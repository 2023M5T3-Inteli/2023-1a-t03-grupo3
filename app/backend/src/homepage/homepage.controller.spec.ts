import { Test, TestingModule } from '@nestjs/testing';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';

describe('HomepageController', () => {
  let controller: HomepageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageController],
      providers: [HomepageService],
    }).compile();

    controller = module.get<HomepageController>(HomepageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all projects', () => {
    expect(controller.findAll()).toEqual([
      {
        id: 1,
        name: "Lorem ip",
        description: "Aaaaaaaa"
      },
      {
        id: 2,
        name: "Project 2",
        description: "bbbbbb"
      }
    ])
  })
});
