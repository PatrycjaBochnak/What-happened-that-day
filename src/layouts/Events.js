import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/Events.css";
import Searcher from "./Searcher";

const Events = ({ sr }) => {
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    sr.reveal(".events", { delay: 200, origin: "top" });
    const date = new Date();
    setCurrentDate(date);
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
