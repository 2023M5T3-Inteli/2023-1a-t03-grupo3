import { Test, TestingModule } from '@nestjs/testing';
import { HomepageService } from './homepage.service';

describe('HomepageService', () => {
  let service: HomepageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomepageService],
    }).compile();

    service = module.get<HomepageService>(HomepageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all projects', () => {
    expect(service.findAll()).toEqual([
      {
        id: 1,
        projectName: "Lorem ip",
        description: "Aaaaaaaa"
      },
      {
        id: 2,
        projectName: "Project 2",
        description: "bbbbbb"
      }
    ])
  })
});
