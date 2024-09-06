import React, { useEffect } from "react";

export const Welcome = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
  }, [sr]);

  return (
    <div
      id="welcome"
      className="min-h-screen bg-blue-200 flex flex-col items-center justify-center px-4"
    >
      <div id="text" className="text-center">
        <h3 className="text-4xl font-bold text-gray-800">
          What happened on that day
        </h3>
        <h4 className="text-2xl font-medium text-gray-600 mt-2">
          in the past?
        </h4>
      </div>
      <div id="content" className="mt-8 max-w-2xl text-center text-gray-700">
        <p className="leading-relaxed text-lg">
          Welcome to our historical exploration platform! We leverage the power
          of technology to connect you with the past. By utilizing your
          computer's local date, we search for historical events that occurred
          on this day in previous years. This way, you can learn about the
          significant moments that shaped history, all while enjoying the
          convenience of modern technology.
        </p>
      </div>
    </div>
  );
};
