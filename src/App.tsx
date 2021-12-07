import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingLayout from './layouts/landing/LandingLayout';
import GlobalStyles from './App.elements';
import Register from './views/auth/register/Register';

function App() {
  return (
    <>
      <GlobalStyles/>

      <Router>
        <Switch>
          <Route exact path="/" component={ LandingLayout } />

          {/* <Route path="/login" component={ LandingLayout } /> */}
          <Route path="/register" component={ Register } />
        </Switch>
      </Router>
    </>
  );
}

export default App;