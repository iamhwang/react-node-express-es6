import React from 'react';

import { useSelector } from 'react-redux';
import Home from '../../../home/component/index/HomePage';
import Login from './LoginFormContainer';

export default function LoginContainer() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.user.accessToken,
  }));

  return (
    <>
      { accessToken
        ? <Home />
        : <Login /> }
    </>
  );
}
