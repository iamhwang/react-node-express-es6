import React from 'react';

export default function MemosPainter({ memos }) {
  return (
    <>
       {memos && memos.map((memo) => (
          <p key={memo.NO}>{memo.MEMO}</p>
      ))}
    </>
  );
}
