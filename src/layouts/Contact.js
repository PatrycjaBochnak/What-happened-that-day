import React, { useEffect } from "react";
import * as Icons from "react-bootstrap-icons";
import "../styles/App.css";
import "../styles/Contact.css";

const Contact = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text");
    sr.reveal("#content", { delay: 1400 });
  }, [sr]);

  return (
    <>
      <div className="contact">
        <div id="text" className="contact-text">Hit me up!</div>

        <div id="content" className="social-media-icons">
          <div className="ig">
            {/* <i className="ri-instagram-line"></i> */}
            <Icons.Instagram />
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/" target="_blank" rel="noopener noreferrer">
              {/* <i className="ri-linkedin-fill"></i> */}
              <Icons.Linkedin />
            </a>
          </div>
          <div className="portfolio">
            {/* <i className="ri-pass-pending-line"></i> */}
            <Icons.Github />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
