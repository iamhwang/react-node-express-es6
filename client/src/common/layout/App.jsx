import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from '../../pages/ErrorPage';
import NotFound from '../../pages/NotFound';
import Profile from '../../objects/user/components/profile/ProfileContainer';
import Mail from '../../objects/mail/components/Mail';
import Memos from '../../objects/memo/components/MemosContainer';

export default function RoutePage() {
  return (
    <div style={routePosition}>
      <div style={wrapper}>
        <Switch>     
          <Route exact path="/side/1" component={ErrorPage} />
          <Route exact path="/side/2" component={NotFound} />
          <Route exact path="/side/3" component={ErrorPage} />
          <Route exact path="/menu/info" component={Profile} />
          <Route exact path="/menu/mail" component={Mail} />
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