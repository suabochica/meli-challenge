import request from "supertest";
import express from "express";
import healthCheckRouter from "@/routes/healthcheck.routes";
import { getHealtCheck } from "@/controllers/healthcheck.controller";

// Mock the controller
jest.mock("@/controllers/healthcheck.controller", () => ({
  getHealtCheck: jest.fn((req, res) => res.status(200).json({ status: "UP" })),
}));

describe("Health Check Route", () => {
  const app = express();
  app.use(express.json());
  app.use("/health", healthCheckRouter);

  it("should call the getHealtCheck controller and return status UP", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "UP" });

    // Ensure the mocked controller was called
    expect(getHealtCheck).toHaveBeenCalled();
  });
});
