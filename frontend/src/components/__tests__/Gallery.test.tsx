import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";

import Gallery from "@/components/Gallery";

describe("Gallery Component", () => {
  test("renders all images correctly", () => {
    render(<Gallery />);

    // Check that all images are rendered
    const images = screen.getAllByAltText(/Image \d/);
    expect(images).toHaveLength(12);

    // Verify the first few image sources
    expect(images[0]).toHaveAttribute(
      "src",
      "https://http2.mlstatic.com/D_Q_NP_2X_943845-MCO78158315894_082024-T.webp"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://http2.mlstatic.com/D_NQ_NP_814654-MLU75209271648_032024-O.webp"
    );
    expect(images[2]).toHaveAttribute(
      "src",
      "https://http2.mlstatic.com/D_NQ_NP_726613-MLU77751138403_072024-O.webpg"
    );
  });
});
