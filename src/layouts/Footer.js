import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {currentYear} Patrycja Bochnak. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;