import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ButtonsMenu = ({ source, linkName }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/message") {
      navigate("/");
    } else if (location.pathname === "/") {
      // React scroll on /
      document.getElementById(source).scrollIntoView({
        behavior: "smooth",
      });
    } else if (location.pathname === "/welcome") {
      // React router /welcome
      navigate(source === "events" ? "/events" : "/contact");
    }
  };

  return (
    <span
      className="cursor-pointer text-white hover:text-gray-400"
      onClick={handleClick}
    >
      {linkName}
    </span>
  );
};

export default ButtonsMenu;
