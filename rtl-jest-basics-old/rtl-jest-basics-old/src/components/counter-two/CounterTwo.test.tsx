import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CounterTwo } from './CounterTwo';

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    await user.click(incrementButton);
    expect(incrementHandler).toBeCalledTimes(1);

    await user.click(decrementButton);
    expect(decrementHandler).toBeCalledTimes(1);
  });
});
