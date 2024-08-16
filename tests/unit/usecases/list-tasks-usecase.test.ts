import { ListTasksUseCase } from "../../../src/tasks/application";


const makeSut = () => {
  const repo = {
    list: jest.fn()
  }
  const usecase = new ListTasksUseCase(repo as any);
  return { repo, usecase };
};

describe("test list tasks usecase", () => {
  test("should list tasks", async () => {
    const { repo, usecase } = makeSut();
    repo.list.mockResolvedValueOnce([]);
    const response = await usecase.execute();
    expect(response).toEqual([]);
  });
});
