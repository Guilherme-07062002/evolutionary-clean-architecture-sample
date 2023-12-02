import { describe, expect, test } from "vitest";
import { Task } from "../../../src/domain/entities/task";

describe("test task entity", () => {
  test("should create a task", () => {
    const task = new Task({ id: "any_id", description: "any_description" });
    expect(task).toBeDefined();
  });

  test("should return a json", () => {
    const task = new Task({ id: "any_id", description: "any_description" });
    const json = task.toJSON();
    expect(json).toEqual({ id: "any_id", description: "any_description" });
  });
});
