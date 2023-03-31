import { Test, TestingModule } from "@nestjs/testing";
import { PrismaClient } from "@prisma/client";
import { RankingController } from "./ranking.controller";
import { RankingService } from "./ranking.service";

describe("RankingController", () => {
  let controller: RankingController;
  let service: RankingService;
  let prisma: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankingController],
      providers: [RankingService],
    }).compile();

    controller = module.get<RankingController>(RankingController);
    service = module.get<RankingService>(RankingService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("# ranking sort", () => {
    it("should get until 20 and rank them", async () => {
      const usersMock = [
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id2", fullName: "Austin", score: 10, picture: "" },
      ];
      jest.spyOn(service, "findAll").mockImplementation(async () => usersMock);
      expect(await controller.findAll()).toBe(usersMock);
    });

    it("should get more than 20", async () => {
      const usersMock = [
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Ay", score: 0, picture: "" },
        { id: "id", fullName: "ny", score: 0, picture: "" },
        { id: "id", fullName: "An", score: 0, picture: "" },
        { id: "id", fullName: "Anay", score: 0, picture: "" },
        { id: "id", fullName: "Anyf", score: 0, picture: "" },
        { id: "id", fullName: "Anyg", score: 0, picture: "" },
        { id: "id", fullName: "Anyk", score: 0, picture: "" },
        { id: "id", fullName: "Anyl", score: 0, picture: "" },
        { id: "id", fullName: "Anyp", score: 0, picture: "" },
        { id: "id", fullName: "Anyo", score: 0, picture: "" },
        { id: "id", fullName: "Anoy", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
        { id: "id", fullName: "Any", score: 0, picture: "" },
      ];
      jest.spyOn(service, "findAll").mockImplementation(async () => usersMock);
      expect(await controller.findAll()).toBeCalled();
    });

  //   describe("# increment points", () => {
  //     it("gets the id and increment 5 points on score", async () => {
  //       const userMock = [
  //         {
  //           id: "ide",
  //           fullName: "",
  //           email: "",
  //           hashedPassword: "string",
  //           contact: "string",
  //           linkedin: "string",
  //           occupation: "string",
  //           picture: "string",
  //           city: "string",
  //           state: "string",
  //           country: "string",
  //           hardSkills: "string",
  //           softSkills: "string",
  //           otherSkills: "string",
  //           score: 0,
  //         },
  //       ];
  //       jest
  //         .spyOn(service, "increment")
  //         .mockImplementation(async () => userMock);
  //       expect(await controller.increment("ide")).toBe({
  //         id: "ide",
  //         fullName: "any",
  //         score: 5,
  //         picture: "",
  //       });
  //     });

  //     it("user not found", async () => {
  //       const userMock = [
  //         {
  //           id: "ide",
  //           fullName: "",
  //           email: "",
  //           hashedPassword: "string",
  //           contact: "string",
  //           linkedin: "string",
  //           occupation: "string",
  //           picture: "string",
  //           city: "string",
  //           state: "string",
  //           country: "string",
  //           hardSkills: "string",
  //           softSkills: "string",
  //           otherSkills: "string",
  //           score: 0,
  //         },
  //       ];
  //       jest
  //         .spyOn(service, "increment")
  //         .mockImplementation(async () => userMock);
  //       expect(await controller.increment("ide")).not.toBeCalled();
  //     });
  //   });
  });
});
