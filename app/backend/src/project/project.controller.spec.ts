import { Test, TestingModule } from "@nestjs/testing";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

describe("ProjectController", () => {
  let controller: ProjectController;
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [ProjectService],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
    service = module.get<ProjectService>(ProjectService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("# request project", () => {
    it("should return accepted ", async () => {
      const mockSpy = [{ message: "any" }];

      jest.spyOn(service, "create").mockImplementation(() => mockSpy);

      expect(controller.create).toBe({ message: "Project accepted " });
    });
  });
});
