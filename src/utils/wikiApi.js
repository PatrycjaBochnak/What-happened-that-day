const getJsonResponse = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
};

const getHistoricalEventsForMonth = async (month) => {
  const eventsPerDay = {};

  for (let day = 1; day <= 31; day++) {
    try {
      const apiUrl = `https://history.muffinlabs.com/date/${month}/${day}`;
      const data = await getJsonResponse(apiUrl);

      if (data && data.data.Events.length > 0) {
        eventsPerDay[day] = data.data.Events.map(event => ({
          date: event.year,
          text: event.text
        }));
      }
    } catch (error) {
      console.error(`Error fetching events for ${month}/${day}:`, error);
    }
  }

  return eventsPerDay;
};


getHistoricalEventsForMonth(10).then(events => {
  console.log(events);
});
