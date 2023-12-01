import { describe, test, afterAll, expect } from "vitest";
import request from "supertest";
import { app } from "../../../src";

describe("testing create task route", () => {
  let createdTaskId: number;

  test("should return 201 if task created", async () => {
    const response = await request(app).post("/task").send({
      description: "test_description",
    });
    expect(response.status).toBe(201);
    createdTaskId = response.body.id;
  });

  afterAll(async () => {
    if (!createdTaskId) return;
    await request(app).delete(`/task/${createdTaskId}`).expect(200);
  });
});
