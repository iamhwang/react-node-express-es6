import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from '../../pages/ErrorPage';
import LoginPage from '../../pages/LoginPage';
import NotFound from '../../pages/NotFound';


export default function RoutePage() {
  return (
    <div style={routePosition}>
      <div style={wrapper}>
        <Switch>     
          <Route exact path="/side/1" component={ErrorPage} />
          <Route exact path="/side/2" component={NotFound} />
          <Route exact path="/side/3" component={ErrorPage} />

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