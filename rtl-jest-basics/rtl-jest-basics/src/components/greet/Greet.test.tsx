import { render, screen } from '@testing-library/react';

import { Greet } from './Greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name="Alin" />);

    const textElement = screen.getByText(/hello alin/i);
    expect(textElement).toBeInTheDocument();
  });
});
