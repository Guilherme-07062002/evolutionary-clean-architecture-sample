import { mock } from "vitest-mock-extended";
import { TaskRepository } from "../../../src/domain/repositories";
import { RemoveTaskUseCase } from "../../../src/application";
import { describe, expect, test } from "vitest";
import { EntityNotFoundError } from "../../../src/domain/errors";
import { Task } from "../../../src/domain/entities";

const makeSut = () => {
  const repo = mock<TaskRepository>();
  const usecase = new RemoveTaskUseCase(repo);
  return { repo, usecase };
};

describe("test remove task usecase", () => {
  test("should remove a task", async () => {
    const { repo, usecase } = makeSut();
    repo.remove.mockResolvedValueOnce(
      new Task({ id: "any_id", description: "any_description" })
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
