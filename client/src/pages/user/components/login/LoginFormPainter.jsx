import React from 'react';

export default function LoginFormPainter({ onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <input
        type="Text"
        name="username"
        placeholder="이름을 입력해주세요."
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        로그인
      </button>
    </>
  );
}
