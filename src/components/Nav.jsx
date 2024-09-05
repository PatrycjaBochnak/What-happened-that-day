import React from "react";
import ButtonsMenu from "./ButtonsMenu";

const Nav = () => (
  <div>
    <a href="/">
      <div>PAST EVENTS.COM</div>
    </a>
    <div>
      <ButtonsMenu source="welcome" linkName="Start" />
      <ButtonsMenu source="events" linkName="Check events" />
      <ButtonsMenu source="contact" linkName="Contact" />
    </div>
  </div>
);

export default Nav;
