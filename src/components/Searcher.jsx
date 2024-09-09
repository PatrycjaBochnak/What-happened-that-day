import { extract } from "query-string/base";
import React, { useState, useEffect } from "react";
import fetchHistoricalEvent from "../utils/wikiApi";
import Calendar from "./Calendar";

function Searcher() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [yearFromCalendar, setYearFromCalendar] = useState(currentYear);
  const [monthFromCalendar, setMonthFromCalendar] = useState(currentMonth);
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getHistoricalEvents() {
      setIsLoading(true);
      try {
        const wikiData = await fetchHistoricalEvent(yearFromCalendar);
        if (wikiData) {
          setHistoricalEvents(wikiData);
          const daysWithEvents = extractDaysFromEvents(
            wikiData,
            monthFromCalendar
          );
          setHighlightedDays(daysWithEvents);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getHistoricalEvents();
  }, [yearFromCalendar, monthFromCalendar]);

  const extractDaysFromEvents = (events, month) => {
    const days = events
      .map((event) => {
        const eventDate = event.match(/(\d{1,2}) (\w+)/);
        if (
          eventDate &&
          eventDate[2].toLowerCase() === getMonthName(month).toLowerCase()
        ) {
          return parseInt(eventDate[1], 10);
        }
        return null;
      })
      .filter(Boolean);
    return days;
  };
  const getMonthName = (monthNumber) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthNumber - 1];
  };

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div>
          <Calendar
            setYearFromCalendar={setYearFromCalendar}
            setMonthFromCalendar={setMonthFromCalendar}
            currentDate={currentDate}
            highlightedDays={highlightedDays}
          />
        </div>
      )}
    </div>
  );
}

export default Searcher;
