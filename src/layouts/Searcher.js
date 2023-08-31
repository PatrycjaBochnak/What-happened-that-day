import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import "../styles/App.css";

function Searcher() {
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate] = useState(new Date());

  async function getJsonResponse(url, config) {
    const res = await axios.get(url, config);
    return res.data;
  }

  async function fetchHistoricalEvent(day, month) {
    const monthIndex = month - 1;

    const wikiEndpoint =
      "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/" +
      monthIndex +
      "/" +
      day;

    const wikiConfig = {
      timeout: 6500,
    };

    try {
      const result = await getJsonResponse(wikiEndpoint, wikiConfig);
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error: " + error);
      return null;
    }
  }

  useEffect(() => {
    async function getHistoricalEvents() {
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;

      const eventsToAdd = [];

      const wikiData = await fetchHistoricalEvent(day, month);
      if (wikiData && wikiData.events) {
        const events = wikiData.events;

        for (const event of events) {
            if ( event.year > 2000 ) {


          const formattedEvent = (
            <div key={event.pageid} className="event">
              <div
                className="event-content"
              >
             <p>{event.text}</p>
                </div>
            </div>
          );

          eventsToAdd.push(formattedEvent);
        }
    }
      }
      setHistoricalEvents(eventsToAdd);
      setIsLoading(false);
    }

    getHistoricalEvents();
  }, []);

  return (
    <div className="searcher">
      <h1>Historical Events</h1>
      <div className="event-list">
        {isLoading ? <p>Loading...</p> : historicalEvents}
      </div>
    </div>
  );
}

export default Searcher;
