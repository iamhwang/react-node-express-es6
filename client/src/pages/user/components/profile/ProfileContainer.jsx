import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePainter from './ProfilePainter';


export default function ProfileContainer() {
  const { username } = useSelector((state) => ({
    username: state.user.username,
  }));

  return (
    <>
      <ProfilePainter username={username} />
    </>
  );
}
