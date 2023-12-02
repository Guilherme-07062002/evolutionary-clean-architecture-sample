import { describe, test, expect, afterEach } from "vitest";
import request from "supertest";
import { app } from "../../../src";

let createdTaskId: string;

describe("testing create task route", () => {
  test("should return 201 if task created", async () => {
    const response = await request(app).post("/task").send({
      description: "test",
    });
    createdTaskId = response.body.id;
    expect(response.status).toBe(201);
  });

  afterEach(async () => {
    if (!createdTaskId) return;

    await request(app).delete(`/task/${createdTaskId}`);
  });
});
