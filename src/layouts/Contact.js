import React from "react";
import "../styles/App.css";
import "../styles/Contact.css";

const Contact = () => {


  return (
    <>
      <div className="contact">
        <div className="contact-text">
          Hit me up!
        </div>
      </div>
      <div className="social-media-icons">
        <div className="ig">
          <i className="ri-instagram-line"></i>
        </div>
        <div className="linkedin">
          <i className="ri-linkedin-fill"></i>
        </div>
        <div className="portfolio">
          <i className="ri-pass-pending-line"></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
