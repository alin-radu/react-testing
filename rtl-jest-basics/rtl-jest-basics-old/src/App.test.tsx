import { render, screen } from '@testing-library/react';
import App from './App';

// test, expect, are methods from Jest that CRA globaly provides in every test
test('renders learn react link', () => {
  // render, create a virtualDOM
  render(<App />);

  // screen, object that contains methods to query the virtualDOM
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
