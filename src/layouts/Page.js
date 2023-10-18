import React, { useEffect } from "react";
import "../styles/App.css";
import Events from "./Events";
import Contact from "./Contact";

const Page = ({ sr }) => {
  useEffect(() => {
    sr.reveal(".page-text", { delay: 200, origin: "top" });
    sr.reveal(".page-img", { delay: 450, origin: "top" });
  }, [sr]);

  return (
    <>
      <div className="logo-text">PAST EVENTS.COM</div>
      <div className="page">
        <div className="page-text">
          <h3>What happened on that day</h3>
          <h4>in the past?</h4>
          <p>
            {" "}
            Welcome to our historical exploration platform! We leverage the
            power of technology to connect you with the past. By utilizing your
            computer's local date, we search for historical events that occurred
            on this day in previous years. This way, you can learn about the
            significant moments that shaped history, all while enjoying the
            convenience of modern technology.
          </p>
        </div>
      </div>
      <Events id="events" sr={sr} />
      <Contact id="contact" sr={sr} />
    </>
  );
};

export default Page;
