import { render, screen } from '@testing-library/react';
import { rest } from 'msw';

import { server } from '../../mocks/server';
import { users as usersData } from '../../mocks/data-mock';

import { Users } from './Users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const usersLength = usersData.length;

    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(usersLength);
  });

  test('render error message', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Users />);
    const errorText = await screen.findByText(/error fetching users/i);

    expect(errorText).toBeInTheDocument();
  });
});
