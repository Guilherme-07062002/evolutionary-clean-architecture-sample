import { UpdateTaskUsecase } from "../../../src/tasks/application";
import { Task } from "../../../src/tasks/domain/entities/task";
import { EntityNotFoundError } from "../../../src/tasks/domain/errors";

const makeSut = () => {
  const repo = {
    update: jest.fn()
  }
  const usecase = new UpdateTaskUsecase(repo);
  return { repo, usecase };
};

describe("test update task usecase", () => {
  test("should update a task", async () => {
    const { repo, usecase } = makeSut();
    repo.update.mockResolvedValueOnce(
      new Task({ id: "any_id", description: "any_description" })
    );
    const response = await usecase.execute({
      id: 1,
      new_description: "any_description",
    });
    expect(response).toBeTruthy();
  });

  test("should throw error if not found", async () => {
    const { repo, usecase } = makeSut();
    repo.update.mockResolvedValueOnce(new EntityNotFoundError("Task"));
    const response = await usecase.execute({
      id: 1,
      description: "any_description",
    });
    expect(response).toBeInstanceOf(EntityNotFoundError);
  });
});
