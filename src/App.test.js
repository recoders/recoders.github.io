import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Take one link', () => {
  render(<App />);
  const linkElement = screen.getByText(/take one/i);
  expect(linkElement).toBeInTheDocument();
});
