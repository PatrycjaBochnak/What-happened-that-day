import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/Events.css";
import Searcher from "./Searcher";

const Events = ({ sr }) => {
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    sr.reveal(".events", { delay: 200, origin: "top" });
    sr.reveal(".events-content", { delay: 450, origin: "top" });

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
  Events from the past 
      </div>
      <div className="events-content">
        <br/>
        <Searcher />
      </div>
    </>
  );
};

export default Events;
