import React from "react";

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
