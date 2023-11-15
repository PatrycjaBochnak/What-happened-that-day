import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layouts/App";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "65px",
  duration: 1400,
  delay: 200,
  reset: true,
  origin: 'top'
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App sr={sr} />
  </React.StrictMode>
);
