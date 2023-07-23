import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {

  it('renders correctly', () => {
    render(<Button type="button">Test Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(<Button type="button">Test Button</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });
});
