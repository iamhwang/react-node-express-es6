import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={header}>
      <p style={textDecoration}>K-CONCEPT</p>
      <Link to="/menu/info" style={textDecoration}>
        <p style={textDecoration}>정보</p>
      </Link>
      <Link to="/menu/memo" style={textDecoration}>
        <p style={textDecoration}>메모</p>
      </Link>
    </div>
  );
}

const textDecoration = {
  textDecoration: 'none',
  color: "black",
  paddingRight: 40,
}

const header = {
  height: "75px",
  padding: "1rem",
  color: "white",
  background: "teal",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  margin: 0,
  width: "100%",
}


 
    