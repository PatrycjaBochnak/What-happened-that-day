import React, { useEffect } from "react";
import * as Icons from "react-bootstrap-icons";

const Contact = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
  }, [sr]);

  return (
    <>
      <div className="contact">
        <div id="text" className="contact-text">
          Hit me up!
        </div>

        <div id="content" className="social-media-icons">
          <div className="ig">
            <a
              href="https://www.instagram.com/patrycjabochnak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Instagram />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Linkedin />
            </a>
          </div>
          <div className="portfolio">
            <a
              href="https://github.com/PatrycjaBochnak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Github />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
