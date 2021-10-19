import React from 'react'

export default function HomePresenter({ dataaa, onClick }) {

  fetch('/api/data/')
    .then((res) => res.json())
    .then(res => console.log(res));

  return (
    <button
      type="button"
      onClick={onClick}
    >
      {dataaa}
    </button>
  )
}
