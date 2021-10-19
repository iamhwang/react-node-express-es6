import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import HomePresenter from './HomePresenter';

import { setData } from './slice';

export default function HomeContainer() {
  const { dataaa } = useSelector((state) => ({
    dataaa: state.dataaa,
  }));

  const dispatch = useDispatch();
  function handleClickMemoButton() {
    dispatch(setData({ dataaa: 'aa' }));
  }


  return (
    <HomePresenter 
      dataaa={dataaa}
      onClick={handleClickMemoButton}
    />
  );
}
