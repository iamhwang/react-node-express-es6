/*
 -- 기능명 : Routes 파일 자동 로드
 -- 작성자 : 황태영
 -- 작성일 : 2021.10.26
 -- 수정일 :
 -- 수정내용:
 -- 특이사항: route 자동화 처리 필요
*/

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from '../../../error/component/ErrorPage';
import NotFoundPage from '../../../error/component/NotFoundPage';
import Profile from '../../../user/component/profile/ProfileContainer';
import Memos from '../../../memo/component/MemosContainer';

export default function RoutePage() {
  return (
    <div style={routePosition}>
      <div style={wrapper}>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/side/1" component={ErrorPage} />
          <Route exact path="/side/2" component={NotFoundPage} />
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