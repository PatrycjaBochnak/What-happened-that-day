import React, { useState, useEffect } from "react";
import fetchHistoricalEvent from "../utils/wikiApi";
import Calendar from "./Calendar";

function Searcher() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const [yearFromCalendar, setYearFromCalendar] = useState(currentYear);
  const [monthFromCalendar, setMonthFromCalendar] = useState(currentMonth);
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getHistoricalEvents() {
      setIsLoading(true);
      const wikiData = await fetchHistoricalEvent(yearFromCalendar);
      if (wikiData) {
        setHistoricalEvents(wikiData);
      }
      setIsLoading(false);
    }

    getHistoricalEvents();
    console.log(getHistoricalEvents)
  }, [yearFromCalendar, monthFromCalendar]);

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div>
          <Calendar
            setYearFromCalendar = {setYearFromCalendar}
            setMonthFromCalendar = {setMonthFromCalendar}
            currentDate = {currentDate}
          />
        </div>
      )}
    </div>
  );
}

export default Searcher;
