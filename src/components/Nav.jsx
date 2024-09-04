import React from "react";
import ButtonsMenu from "./ButtonsMenu";

const Nav = () => (
  <div className="navbar flex items-center justify-between p-4 bg-gray-800 text-white">
    <a href="/">
      <div className="logo-text text-2xl font-bold">PAST EVENTS.COM</div>
    </a>
    <div className="nav-items flex space-x-4">
      <ButtonsMenu source="welcome" linkName="Start" />
      <ButtonsMenu source="events" linkName="Check events" />
      <ButtonsMenu source="contact" linkName="Contact" />
    </div>
  </div>
);

export default Nav;
