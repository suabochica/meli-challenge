import request from "supertest";
import express from "express";
import router from "@/routes/category.routes";
import { getCategory } from "@/controllers/category.controller";

// Mock the controller function
jest.mock("@/controllers/category.controller", () => ({
  getCategory: jest.fn((req, res) => res.status(200).json({ id: req.params.id, name: "Category Name" })),
}));

describe("Category Routes", () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use("/", router); // Mount the router at the root
  });

  it("should call getCategory when a GET request is made to '/:id'", async () => {
    const categoryId = "12345";
    await request(app).get(`/${categoryId}`);

    // Assert that getCategory was called
    expect(getCategory).toHaveBeenCalled();

    // Verify that getCategory was called with the correct parameters
    expect(getCategory).toHaveBeenCalledWith(
      expect.objectContaining({ params: { id: categoryId } }),
      expect.any(Object),
      expect.any(Function)
    );
  });
});
