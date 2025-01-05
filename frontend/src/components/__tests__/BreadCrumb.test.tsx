import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import BreadCrumb from '@/components/BreadCrumb';


describe("BreadCrumb Component", () => {
  const categories = ["Home", "Products", "Electronics"];

  test("renders breadcrumb with categories", () => {
    render(<BreadCrumb categories={categories} />);

    // Check that all categories are rendered
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    // Check that the correct number of categories are rendered
    const categoryItems = screen.getAllByRole("listitem");
    expect(categoryItems).toHaveLength(categories.length);
  });

  test("renders links with correct styles", () => {
    render(<BreadCrumb categories={categories} />);

    // Check the styles for each link
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass(
        "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
      );
    });
  });
});