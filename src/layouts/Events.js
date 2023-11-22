import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/Events.css";
import Searcher from "./Searcher";

const Events = ({ scrlInfo }) => {
  // const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    scrlInfo.sr.reveal("#events #text");
    scrlInfo.sr.reveal("#events #content", {delay: scrlInfo.delay+400, origin: 'bottom'});

    // const date = new Date();
    // setCurrentDate(date);
  }, []);

  // if (!currentDate) {
  //   return null;
  // }

  // const year = currentDate.getFullYear();
  // const month = currentDate.getMonth() + 1;
  // const day = currentDate.getDate();

  return (
    <>
      <div id="events" className="events">
        <h5 id="text" className="events-text">Events from the past</h5>
        <div id="content" className="events-content">
          <Searcher />
        </div>
      </div>
    </>
  );
};

export default Events;
