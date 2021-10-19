import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './HomeContainer';
import Error from './Error';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  );
}
