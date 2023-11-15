import React from "react";
import ButtonsMenu from "./ButtonsMenu";
import "../styles/Nav.css";

const Nav = () => (
  <div className="navbar">
    <a href="/"><div className="logo-text">PAST EVENTS.COM</div></a>
    <div className="nav-items">
      <ButtonsMenu source="welcome" linkName="Start" />
      <ButtonsMenu source="events" linkName="Check events" />
      <ButtonsMenu source="contact" linkName="Contact" />
    </div>
  </div>
);

export default Nav;
