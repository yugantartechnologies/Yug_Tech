import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Yugantar Technologies landing page', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/Yugantar/i);
  expect(titleElements.length).toBeGreaterThan(0);
});

