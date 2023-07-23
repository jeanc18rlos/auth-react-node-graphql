import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container Component', () => {
  it('renders correctly', () => {
    render(<Container><p>Test Child</p></Container>);
    const containerElement = screen.getByText('Test Child');
    expect(containerElement).toBeInTheDocument();
  });
});
