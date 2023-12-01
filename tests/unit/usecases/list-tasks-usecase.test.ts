import { mock } from "vitest-mock-extended";
import { TaskRepository } from "../../../src/domain/repositories";
import { ListTasksUseCase } from "../../../src/application";
import { describe, expect, test } from "vitest";

const makeSut = () => {
  const repo = mock<TaskRepository>();
  const usecase = new ListTasksUseCase(repo);
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
