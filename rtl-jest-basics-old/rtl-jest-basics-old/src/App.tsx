import logo from './logo.svg';

import { AppProviders } from './providers/AppProviders';

import { Greet } from './components/greet/Greet';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/Skills';
import { Counter } from './components/counter/Counter';
import { MuiMode } from './components/mui/MuiMode';
import { CounterTwo } from './components/counter-two/CounterTwo';
import { Users } from './components/users/Users';

import './App.css';

const AppComponent = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

type ComponentWrapperProps = {
  title: string;
  children: JSX.Element;
};

const ComponentWrapper = ({ title, children }: ComponentWrapperProps) => (
  <>
    <h5>{title}</h5>
    <div className="App">{children}</div>
    <br />
  </>
);

export const App = () => (
  <AppProviders>
    <ComponentWrapper title="App">
      <AppComponent />
    </ComponentWrapper>
    <ComponentWrapper title="Greet">
      <Greet />
    </ComponentWrapper>
    <ComponentWrapper title="Application">
      <Application />
    </ComponentWrapper>
    <ComponentWrapper title="Skills">
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
    </ComponentWrapper>
    <ComponentWrapper title="Counter">
      <Counter />
    </ComponentWrapper>
    <ComponentWrapper title="MuiMode">
      <MuiMode />
    </ComponentWrapper>
    <ComponentWrapper title="CounterTwo">
      <CounterTwo count={0} />
    </ComponentWrapper>
    <ComponentWrapper title="Users">
      <Users />
    </ComponentWrapper>
  </AppProviders>
);

export default App;
