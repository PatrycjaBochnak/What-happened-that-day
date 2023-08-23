import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import "../styles/App.css";

function Searcher() {
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [currentDate] = useState(new Date());

  async function getJsonResponse(url, config) {
    const res = await axios.get(url, config);
    return res.data;
  }

  async function fetchHistoricalEvent(day, month) {
    const wikiEndpoint = "https://en.wikipedia.org/w/api.php";

    const wikiParams = queryString.stringify({
      origin: "*",
      format: "json",
      action: "query",
      titles: `${month}_${day}`,
    });

    const wikiLink = `${wikiEndpoint}?${wikiParams}`;

    const wikiConfig = {
      timeout: 6500,
    };

    try {
      const result = await getJsonResponse(wikiLink, wikiConfig);
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
      const currentYear = currentDate.getFullYear();

      for (let year = currentYear - 1; year >= 1950; year--) {
        const wikiData = await fetchHistoricalEvent(day, month);

        if (wikiData && wikiData.query && wikiData.query.pages) {
          const pages = wikiData.query.pages;
          const events = Object.values(pages);

          if (events.length > 0) {
            const formattedEvents = events.map((event) => {
              const eventDate = new Date(event.title);
              const options = { day: "numeric", month: "long" };
              const formattedDate = eventDate.toLocaleDateString("en-US", options);

              return (
                <div key={event.pageid} className="event">
                  <h3 className="event-title">{formattedDate}</h3>
                  <div className="event-content" dangerouslySetInnerHTML={{ __html: event.extract }} />
                </div>
              );
            });

            setHistoricalEvents((prevEvents) => [...prevEvents, ...formattedEvents]);
          }
        }
      }
    }

    getHistoricalEvents();
  }, []);

  return (
    <div className="searcher">
      <h1>Historical Events</h1>
      <div className="event-list">
        {historicalEvents.length > 0 ? historicalEvents : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Searcher;
