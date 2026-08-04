import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /build practical ai systems/i,
    })
  ).toBeInTheDocument();
});
