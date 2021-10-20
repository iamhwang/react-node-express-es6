import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Member from './member/MemberContainer'
import Error from './Error';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Member} />
      <Route component={Error} />
    </Switch>
  );
}
