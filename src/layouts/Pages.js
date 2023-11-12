import React, { useEffect } from "react";
import "../styles/App.css";
import Events from "./Events";
import Contact from "./Contact";
import {Welcome} from "./Welcome";

const Pages = ({ sr }) => {
  useEffect(() => {
    // sr.reveal(".page-text", { delay: 200, origin: "top" });
    // sr.reveal(".page-img", { delay: 450, origin: "top" });
  }, [sr]);

  return (
    <>
      <Welcome id="welcoem" sr={sr} />
      <Events id="events" sr={sr} />
      <Contact id="contact" sr={sr} />
    </>
  );
};

export default Pages;