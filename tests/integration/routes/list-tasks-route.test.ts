import { describe, test, expect } from "vitest";
import request from "supertest";
import { app } from "../../../src";

describe("testing list tasks route", () => {
  test("should return 200 and list tasks", async () => {
    const response = await request(app).get("/task");
    expect(response.status).toBe(200);
  });
});
