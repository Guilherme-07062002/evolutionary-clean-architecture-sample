import { mock } from "vitest-mock-extended";
import { CreateTaskUseCase } from "../../src/application";
import { TaskRepository } from "../../src/domain/repositories";
import { describe, expect, test } from "vitest";
import { Task } from "../../src/domain/entities/task";

const makeSut = () => {
  const repo = mock<TaskRepository>();
  const usecase = new CreateTaskUseCase(repo);
  return { repo, usecase };
};

describe("test create task usecase", () => {
  test("should create a task", async () => {
    const { repo, usecase } = makeSut();
    repo.create.mockResolvedValueOnce(new Task(1, "any_description"));
    const response = await usecase.execute({ description: "any_description" });
    expect(response).toBeInstanceOf(Task);
  });

  test("should return null if error", async () => {
    const { repo, usecase } = makeSut();
    repo.create.mockResolvedValueOnce(null);
    const response = await usecase.execute({ description: "any_description" });
    expect(response).toBeNull();
  });
});
