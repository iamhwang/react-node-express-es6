import React from 'react';

import { useSelector } from 'react-redux';
import HomePage from '../../../../pages/HomePage';
import LoginFormContainer from './LoginFormContainer';

export default function LoginContainer() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.user.accessToken,
  }));

  return (
    <>
      { accessToken
        ? <HomePage />
        : <LoginFormContainer /> }
    </>
  );
}
