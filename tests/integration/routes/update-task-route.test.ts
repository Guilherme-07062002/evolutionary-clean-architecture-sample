import { describe, test, expect, beforeEach, afterEach } from "vitest";
import request from "supertest";
import { app } from "../../../src";

let createdTaskId: string;

describe("testing update task route", () => {
  beforeEach(async () => {
    const createResponse = await request(app)
      .post("/task")
      .send({ description: "test" });

    expect(createResponse.status).toBe(201);
    createdTaskId = createResponse.body.id;
  });

  test("should update a task successfully", async () => {
    if (!createdTaskId) return;

    const updateResponse = await request(app)
      .put(`/task/${createdTaskId}`)
      .send({ description: "test2" });

    expect(updateResponse.status).toBe(200);
  });

  afterEach(async () => {
    if (!createdTaskId) return;

    const deleteResponse = await request(app).delete(`/task/${createdTaskId}`);
    expect(deleteResponse.status).toBe(200);
  });
});
