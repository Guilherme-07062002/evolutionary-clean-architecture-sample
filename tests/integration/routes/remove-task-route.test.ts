import { describe, test, expect, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../../../src";

let createdTaskId: string;

describe("testing remove task route", () => {
  beforeEach(async () => {
    const createResponse = await request(app)
      .post("/task")
      .send({ description: "test" });
    expect(createResponse.status).toBe(201);

    createdTaskId = createResponse.body.id;
  });

  test("should remove the created task", async () => {
    if (!createdTaskId) return;

    const deleteResponse = await request(app).delete(`/task/${createdTaskId}`);
    expect(deleteResponse.status).toBe(200);
  });
});
