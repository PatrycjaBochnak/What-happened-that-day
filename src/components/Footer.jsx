import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="fixed w-full bottom-0 bg-white border-gray-200 dark:bg-gray-900 shadow-lg text-white h-10 text-center
  flex justify-center items-center"
    >
      &copy; {currentYear} Patrycja Bochnak. All right reserved.
    </footer>
  );
};

export default Footer;
