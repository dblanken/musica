import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders card title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/Darglot/i);
  expect(titleElement).toBeInTheDocument();
});

test('can find a card', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Filter by:/i), {target: { value: 'dar' }});
  const darglotElement = screen.getByText(/Darglot/i);
  const shilohElement = screen.queryByText(/Shiloh/i);

  expect(darglotElement).toBeInTheDocument();
  expect(shilohElement).not.toBeInTheDocument();
});
