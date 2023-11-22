import "../styles/App.css";

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Events from "./Events";
import Contact from "./Contact";
import {Welcome} from "./Welcome";

const sr = ScrollReveal({
  distance: "65px",
  duration: 4600,
  // delay: 200,
  reset: true,
  origin: 'top'
});

const delay = 1600;

const Pages = () => {
  useEffect(() => {
    // scrlInfo.sr.reveal(".page-text", { delay: 200, origin: "top" });
    // scrlInfo.sr.reveal(".page-img", { delay: 450, origin: "top" });
  }, []);

  return (
    <div className="prevent-select">
      <Welcome id="welcoem" scrlInfo={{sr:sr,delay:delay}}/>
      <Events id="events" scrlInfo={{sr:sr,delay:delay}}/>
      <Contact id="contact" scrlInfo={{sr:sr,delay:delay}}/>
    </div>
  );
};

export default Pages;