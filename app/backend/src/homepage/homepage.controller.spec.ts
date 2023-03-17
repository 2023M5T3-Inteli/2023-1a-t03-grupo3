import { Test, TestingModule } from "@nestjs/testing";
import { CreateHomepageDto } from "./dto/create-homepage.dto";
import { HomepageController } from "./homepage.controller";
import { HomepageService } from "./homepage.service";

describe("HomepageController", () => {
  let controller: HomepageController;
  let service: HomepageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageController],
      providers: [HomepageService],
    }).compile();

    controller = module.get<HomepageController>(HomepageController);
    service = module.get<HomepageService>(HomepageService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("# projects list", () => {
    it("should list", async () => {
      const mock: CreateHomepageDto[] = [
        {
          name: "ProjectX",
          description: "This is the project X",
          favorite: false,
        },
      ];
      jest.spyOn(service, "findAll").mockImplementation(async () => mock);
      expect(await controller.findAll()).toBe(mock);
    });
  });

  describe("# project selected by id", () => {
    it("should get an especific project", async () => {
      const mock: CreateHomepageDto[] = [
        {
          id: 1,
          name: "ProjectX",
          description: "This is the project X",
          favorite: false,
        },
      ];
      jest.spyOn(service, "findOne").mockImplementation(async () => mock);
      expect(await controller.findOne(1)).toBe(mock);
    });
  });
});
