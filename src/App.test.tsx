import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders card title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/Darglot/i);
  expect(titleElement).toBeInTheDocument();
});
