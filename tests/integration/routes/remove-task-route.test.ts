import { describe, test, expect } from "vitest";
import request from "supertest";
import { app } from "../../../src";

describe("testing remove task route", () => {
  let createdTaskId: string;
  test("should return 200 if task is removed", async () => {
    const createdTask = await request(app).post("/task").send({
      description: "test",
    });
    expect(createdTask.status).toBe(201);
    if (createdTask.status !== 201) return;

    createdTaskId = createdTask.body.id;

    const response = await request(app).delete(`/task/${createdTaskId}`);
    expect(response.status).toBe(200);
  });
});
