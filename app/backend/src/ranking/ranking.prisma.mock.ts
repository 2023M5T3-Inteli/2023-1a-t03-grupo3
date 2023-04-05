export const usersMock = [
    { id: "id", fullName: "Any", score: 0, picture: "" },
    { id: "id2", fullName: "Austin", score: 10, picture: "" },
  ];

export const prismaMock = {
    user: {
        findAll: jest.fn().mockResolvedValue(usersMock),
        create: jest.fn().mockResolvedValue(usersMock[0]),
    }
}
