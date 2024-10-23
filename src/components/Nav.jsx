import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonsMenu from "./ButtonsMenu";
import logo from "../assets/logo.jpg";

const Nav = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-[#0c1c35] border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
             src={logo}
            className="h-8"
            alt="PAST EVENTS Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PAST EVENTS.COM
          </span>
        </a>

        {/* Right side - button and hamburger */}
        <div className="flex md:order-2 space-x-3">
          <Link to="/message">
            <button
              type="button"
              className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300"
            >
              Click here to send me a message
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Links for desktop and mobile */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isClick ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-[#0c1c35]">
            <li>
              <ButtonsMenu
                source="welcome"
                linkName="Start"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
              />
            </li>
            <li>
              <ButtonsMenu
                source="events"
                linkName="Check events"
                className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
              />
            </li>
            <li>
              <ButtonsMenu
                source="contact"
                linkName="Contact"
                className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
