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
    <div className="relative group">
      <span
        className="cursor-pointer text-white hover:text-gray-400"
        onClick={handleClick}
      >
        {linkName}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </div>
  );
};
export default ButtonsMenu;
