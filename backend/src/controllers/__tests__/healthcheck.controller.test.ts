import request from "supertest";
import express from "express";

const app = express();

// Endpoint de Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

describe("Health Check Controller", () => {
  it("should return a 200 status and status: UP", async () => {
    const response = await request(app).get("/health");
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "UP");
    expect(response.body).toHaveProperty("timestamp");
  });
});
