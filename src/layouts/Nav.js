import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Nav.css';

const list = [
  { name: "Start", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul className="menu">{menu}</ul>
    </nav>
  );
};

export default Nav;
