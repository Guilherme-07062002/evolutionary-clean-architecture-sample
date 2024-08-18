import { EntityNotFoundError } from "../../../src/main/errors";
import { RemoveTaskUseCase } from "../../../src/modules/tasks/application";

const makeSut = () => {
  const repo = {
    remove: jest.fn()
  };
  const usecase = new RemoveTaskUseCase(repo as any);
  return { repo, usecase };
};

describe("testing remove task usecase", () => {
  test("should remove a task", async () => {
    const { repo, usecase } = makeSut();
    repo.remove.mockResolvedValueOnce(
      { id: "any_id", description: "any_description" }
    );
    const response = await usecase.execute("any_id");
    expect(response).toBeTruthy();
  });

  test("should throw error if not found", async () => {
    const { repo, usecase } = makeSut();
    repo.remove.mockResolvedValueOnce(new EntityNotFoundError("Task"));
    const response = await usecase.execute("any_id");
    expect(response).toBeInstanceOf(EntityNotFoundError);
  });
});
