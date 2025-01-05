import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import NavBar from '@/components/NavBar';

describe("NavBar Component", () => {
  test("renders navigation bar with all links", () => {
    render(<NavBar />);

    // Check for Home link
    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    // Check for other links
    const categoriesLink = screen.getByRole("link", { name: /Categorías/i });
    const offersLink = screen.getByRole("link", { name: /Ofertas/i });
    const supermarketLink = screen.getByRole("link", { name: /Supermercado/i });
    const fashionLink = screen.getByRole("link", { name: /Moda/i });

    expect(categoriesLink).toBeInTheDocument();
    expect(offersLink).toBeInTheDocument();
    expect(supermarketLink).toBeInTheDocument();
    expect(fashionLink).toBeInTheDocument();

    // Verify href attributes
    expect(categoriesLink).toHaveAttribute("href", "#");
    expect(offersLink).toHaveAttribute("href", "#");
    expect(supermarketLink).toHaveAttribute("href", "#");
    expect(fashionLink).toHaveAttribute("href", "#");
  });

  test("applies correct classes to the Home link", () => {
    render(<NavBar />);

    const homeLink = screen.getByRole("link", { name: /Home/i });

    // Check the class names applied
    expect(homeLink).toHaveClass("block py-2 px-3 text-white bg-blue-700 rounded");
    expect(homeLink).toHaveClass("md:bg-transparent md:text-blue-700 md:p-0");
  });
});