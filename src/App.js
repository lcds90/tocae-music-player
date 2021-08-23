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
      <Switch>
        <ThemeProvider theme={theme}>
          <Reset />
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
        </ThemeProvider>
      </Switch>
    </>
  );
}

export default App;
