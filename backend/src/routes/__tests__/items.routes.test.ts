import request from "supertest";
import express from "express";
import router from "@/routes/item.routes";
import { getItem, searchItems } from "@/controllers/item.controller";

// Mock the controller functions
jest.mock("@/controllers/item.controller", () => ({
  getItem: jest.fn((req, res) => res.status(200).json({ id: req.params.id, name: "Item Name" })),
  searchItems: jest.fn((req, res) => res.status(200).json({ items: ["Item1", "Item2"] })),
}));

describe("Item Routes", () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use("/", router); // Mount the router at the root
  });

  it("should call searchItems when a GET request is made to '/'", async () => {
    await request(app).get("/");

    // Assert that searchItems was called
    expect(searchItems).toHaveBeenCalled();
  });

  it("should call getItem when a GET request is made to '/:id'", async () => {
    const itemId = "12345";
    await request(app).get(`/${itemId}`);

    // Assert that getItem was called with the correct parameters
    expect(getItem).toHaveBeenCalled();
    expect(getItem).toHaveBeenCalledWith(
      expect.objectContaining({ params: { id: itemId } }),
      expect.any(Object),
      expect.any(Function)
    );
  });
});
