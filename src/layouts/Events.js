import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/Events.css";
import Searcher from "./Searcher";

const Events = ({ sr }) => {
  const [currentDate, setCurrentDate] = useState(null);
  const date = new Date();

  useEffect(() => {
    setCurrentDate(date);
    sr.reveal(".", { delay: 200, origin: "top" });
    sr.reveal(".events-content", { delay: 450, origin: "top" });
  }, [sr]);

  if (!currentDate) {
    return null;
  }

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return (
    <>
    <div className="events">
      <h5>Events from the past</h5>
    <div className="events-content">
        <br />
        <Searcher />
    </div>
    </div>
    </>
  );
};

export default Events;
