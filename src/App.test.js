import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio heading', () => {
  window.history.pushState({}, '', '/portfolio/');
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /build practical ai systems/i,
    })
  ).toBeInTheDocument();
});
