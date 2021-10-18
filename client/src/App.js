import React from 'react'

export default function App() {

  fetch('/api/data/')
    .then((res) => res.json())
    .then(res => console.log(res));

  return (
    <button
      type="button"
    >
      hihiih
    </button>
  )
}
