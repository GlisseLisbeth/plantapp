import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import Administration from './screens/Administration';
import RoutePrivate from './components/RoutePrivate';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <RoutePrivate exact path="/administration" component={Administration} />
      </Switch>
    </Router>
  )
}

export default App