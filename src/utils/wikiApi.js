const getJsonResponse = async (url) => {
  const res = await fetch(url);
  const parsedJson = await res.json();
  const pages = parsedJson.query.pages;
  const page = pages ? Object.values(pages)[0] : null;
  const extract = page ? page.extract : null;
  console.log("Extract:", extract);
  return extract;
};

const fetchHistoricalEvent = async (year) => {
  const wikiEndpoint = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=${year}&origin=*`;

  try {
    const result = await getJsonResponse(wikiEndpoint);
    return result ? result.split('. ').slice(0, 5) : [];
  } catch (error) {
    console.log("Error fetching historical event: " + error);
    return [];
  }
};


export default fetchHistoricalEvent;
