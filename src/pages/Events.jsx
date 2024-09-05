import React, { useEffect, useState } from "react";
import Searcher from "../components/Searcher";

const Events = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text");
    sr.reveal("#content", { delay: 1400 });
  }, [sr]);
  return (
    <>
      <div className="events">
        <h5 id="text" className="events-text">
          Events from the past
        </h5>
        <div id="content" className="events-content">
          <Searcher />
        </div>
      </div>
    </>
  );
};

export default Events;
