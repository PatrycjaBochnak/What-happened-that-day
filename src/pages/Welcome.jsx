import React, { useEffect } from "react";

export const Welcome = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#text-2", { delay: 1000, origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
  }, [sr]);

  return (
    <div
      id="welcome"
      className="min-h-screen bg-[#081325] text-white flex flex-col items-center justify-center px-4"
    >
      <div className="text-center">
        <h3
          id="text"
          className="text-4xl font-bold border-b-4 border-pink-600 inline-block"
        >
          What Happened on That Day
        </h3>
        <h4 id="text-2" className="text-2xl font-medium text-pink-300 mt-2">
          in the past?
        </h4>
      </div>
      <div id="content" className="mt-8 max-w-2xl text-center text-gray-300  leading-relaxed text-lg">
          Welcome to our historical exploration platform! We leverage the power
          of technology to connect you with the past. By utilizing your
          computer's local date, we search for historical events that occurred
          on this day in previous years. This way, you can learn about the
          significant moments that shaped history, all while enjoying the
          convenience of modern technology.
      </div>
    </div>
  );
};
