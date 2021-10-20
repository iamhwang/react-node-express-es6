import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoginFormPainter from './LoginFormPainter';

import { changeUsername, requestUserLogin } from '../../reducer/reducerUser';

export default function LoginFormContainer() {
  const { accessToken } = useSelector((state) => ({
    username: state.user.username,
    accessToken: state.user.accessToken,

  }));

  const dispatch = useDispatch();
  function handleChangeUsername({ name, value }) {
    dispatch(changeUsername({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(requestUserLogin());
    console.log(accessToken);
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
