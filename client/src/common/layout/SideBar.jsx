import React from 'react';
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div style={sidebar}>
        <Link to="/side/1"><h4>NONE</h4></Link>
        <Link to="/side/1"><h4>NONE</h4></Link>
        <Link to="/side/1" style={textDecoration}>
          <h4 style={padding}>1</h4>
        </Link>
        <Link to="/side/2" style={textDecoration}>
          <h4 style={padding}>2</h4>
        </Link>
        <Link to="/side/3" style={textDecoration}>
          <h4 style={padding}>3</h4>
        </Link>
    </div> 
  );
}

const padding = {
  paddingTop: 30,
}

const textDecoration = {
  textDecoration: 'none',
  textAlign: 'center',
  color: "black",
}


const sidebar = {
  listStyleType: "none",
  background: "#ccc",
  display: "table-cell",
  verticalAlign: "middle",
  margin: 0,
  padding: 0,
  position: "fixed",
  overflow: "",
  height: "100%",
  width: "5%",
  left: 0,
}

