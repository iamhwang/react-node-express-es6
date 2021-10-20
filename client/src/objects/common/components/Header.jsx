import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <h1 style={header}>
      <Link to="/dsafsedf">
        <button>Error</button>
      </Link>
      <Link to="/Home">
        <button>AA</button>
      </Link>
      <Link to="/sdf">
        <button>Error</button>
      </Link>
    </h1>
  );
}


const header = {
  height: "75px",
  padding: "1rem",
  color: "white",
  background: "teal",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  margin: 0,
  width: "100%",
}


 
    