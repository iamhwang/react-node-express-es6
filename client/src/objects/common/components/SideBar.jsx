import React from 'react';

export default function SideBar() {
  return (
    <h1 style={sidebar}>
      SideBar
    </h1>
  );
}


const sidebar = {
  listStyleType: "none",
  background: "#ccc",
  display: "flex",
  margin: 0,
  padding: 0,
  position: "fixed",
  overflow: "auto",
  height: "100%",
  width: "10%",
  left: 0,
}
