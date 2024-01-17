import { rest } from 'msw';

import { users as usersData } from './data-mock';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...usersData]));
  }),
];
