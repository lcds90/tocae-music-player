import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  ThemeProvider,
} from 'styled-components';

import {
  Reset,
} from 'styled-reset';

import {
  Details,
  Home,
} from 'Pages';

import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <Switch>
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
