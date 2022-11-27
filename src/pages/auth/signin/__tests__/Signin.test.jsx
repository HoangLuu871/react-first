import { render, screen } from '@testing-library/react';
import Signin from '../index';

test('renders sign in page', () => {
  render(<Signin />);
  const signinElement = screen.getByText(/sign in/i);
  expect(signinElement).toBeInTheDocument();
});
