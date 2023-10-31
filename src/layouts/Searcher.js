import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import "../styles/Results.css";

function Searcher() {
  const currentDate = new Date();
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getJsonResponse(url, config) {
    const res = await axios.get(url, config);
    return res.data;
  }

  async function fetchHistoricalEvent(day, month) {
    const monthIndex = month;
    const wikiEndpoint =
      `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${monthIndex}/${day}`;
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
          if (event.year > 2000) {
            const formattedEvent = (
              <div className="event-border">
              <div key={event.pageid} className="event">
                <div className="event-content">
                  <p>{event.text}</p>
                </div>
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
    <div>
      <div className="results-title">
        <h5>Historical Events from {currentDate.toDateString()}</h5>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="results-table">
          {historicalEvents}
        </div>
      )}
    </div>
  );
}

export default Searcher;
