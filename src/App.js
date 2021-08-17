import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Details,
  Home,
} from '@pages';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
