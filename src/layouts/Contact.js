import React, { useEffect } from "react";
import * as Icons from "react-bootstrap-icons";
import "../styles/App.css";
import "../styles/Contact.css";

const Contact = ({ scrlInfo }) => {
  useEffect(() => {
    scrlInfo.sr.reveal("#contact #text");
    scrlInfo.sr.reveal("#contact #content", {delay: scrlInfo.delay-600, origin: 'bottom'});
  }, []);

  return (
    <>
      <div id="contact" className="contact">
        <div id="text" className="contact-text prevent-select">Hit me up!</div>

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
