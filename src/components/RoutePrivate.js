import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const RoutePrivate = ({component: Component, ...props}) => {
  const authenticate = true;
  const userAuthenticate = true;
  const loading = false;
  return (
    <Route { ...props } render={ props => !authenticate && !loading ?  (
      <Redirect to="/" />
  )  : (
      <Component {...props} />
  ) } />
  );
}

export default RoutePrivate;