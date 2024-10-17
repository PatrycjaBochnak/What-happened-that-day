import { list } from "postcss";
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

  // useEffect(() => {
  //   async function getHistoricalEvents() {
  //     setIsLoading(true);
  //     try {
  //       const wikiData = await fetchHistoricalEvent(yearFromCalendar);
  //       if (wikiData) {
  //         setHistoricalEvents(wikiData);
  //         console.log("wikiData", wikiData);
  //         const daysWithEvents = extractDaysFromEvents(
  //           wikiData,
  //           monthFromCalendar
  //         );
  //         setHighlightedDays(daysWithEvents);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getHistoricalEvents();
  // }, [yearFromCalendar, monthFromCalendar]);

  // function stripHTML(htmlString) {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlString, "text/html");
  //   const events = [];

  //   // Take all <li> with events
  //   const listItems = doc.querySelectorAll("li");

  //   listItems.forEach((li) => {
  //     const text = li.textContent;
  //     if(text) {
  //       events.push(text)
  //     }
  //   });
  //   console.log(events)
  //   return events;
  // }
  
  // function extractEventsFromHTML(htmlString) {
  // const events = stripHTML(htmlString);
  // const extractedEvents = [];

  //   // Wyrażenie regularne by dopasować dzień i miesiąc
  //   const regex = /(\d{1,2})\s+(\w+)/;
  //   events.forEach((event) => {
  //     const match = regex.exec(event);
  //     if (match) {
  //       const day = parseInt(match[1], 10);
  //       const month = match[2];
  //       extractedEvents.push({day, month, description: event})
  //     }
  //   })
  //   return extractedEvents;
  // }

  // const extractDaysFromEvents = (events, month) => {
  //   const cleanEvents = extractEventsFromHTML(events);

  //   // Filter events for chosen month 
  //   const daysWithEvents = cleanEvents
  //   .filter((event) => getMonthName(month).toLocaleLowerCase() === event.month.toLocaleLowerCase())
  //   .map((event) => event.day)

  //   console.log("Days with events:", daysWithEvents);
  //   return daysWithEvents;
  // };

  // const getMonthName = (monthNumber) => {
  //   const monthNames = [
  //     "January", "February", "March", "April", "May", 
  //     "June", "July", "August", "September", "October", 
  //     "November", "December"
  //   ];
  //   return monthNames[monthNumber - 1];
  // };

  // return (
  //   <div className="p-6 bg-blue-100 rounded-lg shadow-md">
  //     {isLoading ? (
  //       <p className="text-center text-gray-600">Loading...</p>
  //     ) : (
  //       <div>
  //         <Calendar
  //           setYearFromCalendar={setYearFromCalendar}
  //           setMonthFromCalendar={setMonthFromCalendar}
  //           currentDate={currentDate}
  //           highlightedDays={highlightedDays}
  //         />
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Searcher;
