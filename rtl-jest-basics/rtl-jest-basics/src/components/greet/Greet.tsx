import { GreetProps } from './greet.types';

export const Greet = ({ name }: GreetProps) => (
  <div className="App">Hello {name ? name : 'Guest'}</div>
);
