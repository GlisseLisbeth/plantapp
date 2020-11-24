import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../screens/Login';
import Register from '../screens/Register';

const RouteAuth = () => {
  return (
    <div className="">
      <div className="">
        <Switch>
          <Route
            exact
            path="/auth/login"
            component={Login}
          />

          <Route
            exact
            path="/auth/register"
            component={Register}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  )
}

export default RouteAuth;
