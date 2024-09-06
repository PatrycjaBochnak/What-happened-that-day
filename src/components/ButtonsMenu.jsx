import React from "react";
import { Link } from "react-scroll";

const ButtonsMenu = ({ source, linkName }) => (
  <Link
    className="cursor-pointer text-white hover:text-gray-400"
    activeClass="active"
    to={source}
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
  >
    {linkName}
  </Link>
);

export default ButtonsMenu;
