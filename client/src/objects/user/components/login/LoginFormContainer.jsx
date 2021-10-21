import React from 'react';
import { useDispatch } from 'react-redux';

import LoginFormPainter from './LoginFormPainter';

import { changeUsername, requestUserLogin } from '../../reducer/reducerUser';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  function handleChangeUsername({ name, value }) {
    dispatch(changeUsername({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(requestUserLogin());
  }

  return (
    <>
      <LoginFormPainter
        onChange={handleChangeUsername}
        onClick={handleClickLoginButton}
      />
    </>
  );
}
