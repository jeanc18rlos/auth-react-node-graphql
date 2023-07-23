import React from 'react';
import { render, screen } from '@testing-library/react';
import { H2 } from './headings';

describe('H2 Component', () => {
  it('renders correctly', () => {
    render(<H2>Test Heading</H2>);
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(<H2>Test Heading</H2>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });
});
