import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestMemosInit } from '../reducer/memoReducer';
import MemosPainter from './MemosPainter';

export default function Memo() {
  const { memos } = useSelector((state) => ({
    memos: state.memo.memos,
  }));


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMemosInit());
  }, [dispatch]);
  return (
    <>
      <MemosPainter memos={memos} />
    </>
  );
}
