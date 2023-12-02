import { describe, test, expect, afterEach } from "vitest";
import request from "supertest";
import { app } from "../../../src";

describe("testing create task route", () => {
  let createdTaskId: string;
  test("should return 201 if task created", async () => {
    const response = await request(app).post("/task").send({
      description: "test",
    });
    createdTaskId = response.body.id;
    expect(response.status).toBe(201);
  });

  afterEach(async () => {
    await request(app).delete(`/task/${createdTaskId}`);
  });
});
