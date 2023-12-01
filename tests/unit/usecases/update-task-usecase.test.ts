import { mock } from "vitest-mock-extended";
import { TaskRepository } from "../../../src/domain/repositories";
import { UpdateTaskUsecase } from "../../../src/application";
import { describe, expect, test } from "vitest";
import { EntityNotFoundError } from "../../../src/domain/errors";

const makeSut = () => {
  const repo = mock<TaskRepository>();
  const usecase = new UpdateTaskUsecase(repo);
  return { repo, usecase };
};

describe("test update task usecase", () => {
  test("should update a task", async () => {
    const { repo, usecase } = makeSut();
    repo.update.mockResolvedValueOnce(true);
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
