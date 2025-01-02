import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Enables custom matchers like toBeInTheDocument
import { describe, it, expect } from 'vitest';
import BreadCrumb from '../BreadCrumb';

const mockData: string[] = ['item uno', 'item dos', 'item tres'];

describe('BreadCrumb', () => {
  it('renders the breadcrumb correctly', () => {
    render(<BreadCrumb items={mockData} />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);

    expect(screen.getByText('item uno')).toBeInTheDocument();
    expect(screen.getByText('item dos')).toBeInTheDocument();
    expect(screen.getByText('item tres')).toBeInTheDocument();
  });
});
