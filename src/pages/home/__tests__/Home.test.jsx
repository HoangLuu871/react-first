import { render, screen } from '@testing-library/react';
import Home from '../index';

test('renders home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
