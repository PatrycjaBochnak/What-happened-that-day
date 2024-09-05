import React, { useState } from "react";
import ButtonsMenu from "./ButtonsMenu";

const Nav = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    console.log("Button is clicked")
    setIsClick(!isClick);
  };

  return (
    <div className="fixed w-full bg-black shadow-lg">
      <div className="flex justify-between items-center sm:px-6 lg:px-8 h-20">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="/">
              <div className="text-white text-lg font-bold">
                PAST EVENTS.COM
              </div>
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-white">
          <ButtonsMenu source="welcome" linkName="Start" />
          <ButtonsMenu source="events" linkName="Check events" />
          <ButtonsMenu source="contact" linkName="Contact" />
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
          >
            {/* Hamburger */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile phones */}
      {isClick && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 text-white">
          <ButtonsMenu source="welcome" linkName="Start" />
          <ButtonsMenu source="events" linkName="Check events" />
          <ButtonsMenu source="contact" linkName="Contact" />
        </div>
      )}
    </div>
  );
};

export default Nav;
