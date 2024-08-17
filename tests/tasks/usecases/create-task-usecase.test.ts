import { CreateTaskUseCase } from '../../../src/modules/tasks/application'
import { Task } from '../../../src/modules/tasks/domain/entities/task';

const makeSut = () => {
  const repo = {
    create: jest.fn()
  }
  const usecase = new CreateTaskUseCase(repo as any);
  return { repo, usecase };
};

describe("testing create task usecase", () => {
  test("should create a task", async () => {
    const { repo, usecase } = makeSut();

    jest.spyOn(repo, "create").mockResolvedValueOnce(
      new Task({ id: "any_id", description: "any_description" })
    );

    const response = await usecase.execute({description: "any description"});
    expect(response).toBeInstanceOf(Task);
  });

  test("should return null if error", async () => {
    const { repo, usecase } = makeSut();
    jest.spyOn(repo, "create").mockResolvedValueOnce(null);

    const response = await usecase.execute({description: "any description"});
    expect(response).toBeNull();
  });
});
