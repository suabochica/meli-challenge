import { render, screen } from "@testing-library/react";
import { describe, test, vi, expect} from "vitest";
import App from "./App";

// Mock the components for testing purposes
vi.mock("./Home", () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock("./Detail", () => ({
  default: () => <div>Detail Page</div>,
}));

vi.mock("./SearchWithQuery", () => ({
  default: () => <div>Search Page</div>,
}));

describe("App Component", () => {
  test("renders Home component on default route '/'", () => {
    render(
        <App />
    );

    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test("renders SearchBar in Detail  '/items/:id' route", () => {
    window.history.pushState({}, "Detail page", "/items/123");

    render(
        <App />
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("renders SearchWithQuery component on '/items' route", () => {
    window.history.pushState({}, "Search page", "/items");

    render(
        <App />
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});