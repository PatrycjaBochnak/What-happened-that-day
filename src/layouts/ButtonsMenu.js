import React from "react";
import { Link } from "react-scroll";

const ButtonsMenu = ({ source, linkName }) => (
  <Link
    className="button"
    activeClass="active"
    to={source}
    spy={true}
    smooth={true}
    // offset={50}
    duration={500}
  >
    {linkName}
  </Link>
);

export default ButtonsMenu;
