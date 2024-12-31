import request from "supertest";
import express from "express";
import router from "@/routes/healthcheck.routes";
import { getHealthCheck } from "@/controllers/healthcheck.controller";

// Mock the controller BEFORE importing the router
jest.mock("@/controllers/healthcheck.controller", () => ({
  getHealthCheck: jest.fn((req, res) => res.status(200).json({ status: "UP" })),
}));

describe("Health Check Route", () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use("/", router);
  });

  it("should call the getHealthCheck controller when a GET request is made to '/'", async () => {
    await request(app).get("/");

    // Assert that getHealthCheck has been called
    expect(getHealthCheck).toHaveBeenCalled();
  });
});
