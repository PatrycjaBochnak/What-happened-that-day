import React from "react";
import ButtonsMenu from "./ButtonsMenu";
import '../styles/Nav.css';

const Nav = () => (
  <div className="navbar">
    <div className="nav-items">
      <ButtonsMenu source="page" linkName="Start" />
      <ButtonsMenu source="events" linkName="Check events" />
      <ButtonsMenu source="contact" linkName="Contact" />
    </div>
  </div>
);

export default Nav;
