import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AA from './AA';


export default function RoutePage() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/Home" component={AA} />
      <Route component={ErrorPage} />
    </Switch>
  );
}
