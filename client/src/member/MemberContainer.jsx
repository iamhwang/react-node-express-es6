import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { setUser, requestUSER } from './member';

function MemberPage({ user, onClick }) {
  return (
    <>
      <p>hello?</p>
      <button
        type="button"
        onClick={onClick}
      > click! {user}
      </button>
      <p>world!</p>
    </>
  )
}

export default function MemberContainer() {
  
  const { user } = useSelector((state) => ({
    user: state.memberReducer.user
  }));


  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setUser({ user: 'hi' }));
    dispatch(requestUSER());
  }

  return (
    <>
      <MemberPage user={user} onClick={handleClick} />
    </>
  );
}
