import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed w-full bottom-0 bg-black shadow-lg text-white h-10">
        &copy; {currentYear} Patrycja Bochnak. All right reserved.
    </footer>
  );
};

export default Footer;
