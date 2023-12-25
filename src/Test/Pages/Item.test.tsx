import { render, screen } from '@testing-library/react';
import Item from '../../Pages/Item';
import { debug } from 'console';

test('renders item', () => {
  render(<Item />);
  const textLable = screen.getByText(/this is item/i);

  debug(textLable)
  expect(textLable).toBeInTheDocument();
  expect(textLable).toBeVisible()
});
