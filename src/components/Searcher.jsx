import React, { useState, useEffect } from "react";
import { getHistoricalEventsForMonth } from "../utils/wikiApi";
import Calendar from "./Calendar";

function Searcher() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [yearFromCalendar, setYearFromCalendar] = useState(currentYear);
  const [monthFromCalendar, setMonthFromCalendar] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        console.log("Fetching events for month:", monthFromCalendar);
        const eventsForMonth = await getHistoricalEventsForMonth(
          monthFromCalendar
        );
        console.log("Fetched events:", eventsForMonth);
        setHistoricalEvents(eventsForMonth);

        const daysWithEvents = Object.keys(eventsForMonth).map((day) =>
          parseInt(day)
        );
        setHighlightedDays(daysWithEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [monthFromCalendar]);

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
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      )}
    </div>
  );
}

export default Searcher;
