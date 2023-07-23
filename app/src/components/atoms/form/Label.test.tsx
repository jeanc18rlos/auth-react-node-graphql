import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  it('renders correctly', () => {
    render(<Label htmlFor="test-id">Test Label</Label>);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'test-id');
  });

  it('displays the correct text', () => {
    render(<Label htmlFor="test-id">Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('has correct htmlFor attribute', () => {
    render(<Label htmlFor="test-id">Test Label</Label>);
    expect(screen.getByText('Test Label')).toHaveAttribute('for', 'test-id');
  });
});
