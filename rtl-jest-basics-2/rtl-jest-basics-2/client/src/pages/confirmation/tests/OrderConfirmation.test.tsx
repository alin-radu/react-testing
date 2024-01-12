import { render, screen } from '../../../test-utils/testing-library-utils';
import { rest } from 'msw';

import { server } from '../../../mocks/server';

import { OrderConfirmation } from '../OrderConfirmation';

describe('OrderConfirmation', () => {
  test('handle errors for order confirmation error', async () => {
    server.resetHandlers(
      rest.post('http://localhost:3030/order', (_, res, ctx) => res(ctx.status(500)))
    );
    render(<OrderConfirmation setOrderPhase={jest.fn()} />);
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
