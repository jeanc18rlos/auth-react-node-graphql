import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageLink from './Link';

describe('PageLink Component', () => {
  it('renders correctly', () => {
    render(<MemoryRouter><PageLink to="/test-path">Test Page Link</PageLink></MemoryRouter>);
    const linkElement = screen.getByRole('link', { name: /Test Page Link/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test-path');
  });

  it('displays the correct text', () => {
    render(<MemoryRouter><PageLink to="/test-path">Test Page Link</PageLink></MemoryRouter>);
    expect(screen.getByText('Test Page Link')).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    render(<MemoryRouter><PageLink to="/test-path">Test Page Link</PageLink></MemoryRouter>);
    expect(screen.getByRole('link', { name: /Test Page Link/i })).toHaveAttribute('href', '/test-path');
  });
});
