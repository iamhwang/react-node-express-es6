import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from '../../error/components/ErrorPage';
import NotFound from '../../error/components/NotFound';
import Profile from '../../user/components/profile/ProfileContainer';
import Memos from '../../memo/components/MemosContainer';

export default function RoutePage() {
  return (
    <div style={routePosition}>
      <div style={wrapper}>
        <Switch>    
          <Route exact path="/" component={Profile} />
          <Route exact path="/side/1" component={ErrorPage} />
          <Route exact path="/side/2" component={NotFound} />
          <Route exact path="/side/3" component={ErrorPage} />
          <Route exact path="/menu/info" component={Profile} />
          <Route exact path="/menu/Memo" component={Memos} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}
const wrapper = {
  maxWidth: "350px",
  width: "100%",
};

const routePosition = {
  display: "flex",
  height: "80vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};