import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders item', () => {
  render(<App />);
  const textLable = screen.getByText(/this is item/i);
  expect(textLable).toBeInTheDocument();
  expect(textLable).toBeVisible()
});
