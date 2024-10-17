import React, { useEffect } from "react";
import Searcher from "../components/Searcher";

const Events = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
  }, [sr]);

  return (
    <div
      id="events"
      className="min-h-screen bg-[#081325] text-white flex flex-col items-center justify-center px-4"
    >
      <h5
        id="text"
        className="text-3xl mt-24 font-bold border-b-4 border-pink-600 mb-6"
      >
        Events from the past
      </h5>
      <div
        id="content"
        className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <Searcher />
      </div>
    </div>
  );
};

export default Events;
