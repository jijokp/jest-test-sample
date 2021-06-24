import { render, screen } from '@testing-library/react';
import App from '../pages/listNames';

test('renders learn react links', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test Components/i);
  expect(linkElement).toBeInTheDocument();
});
