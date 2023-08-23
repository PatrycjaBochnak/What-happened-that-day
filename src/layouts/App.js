import React from "react";
import "../styles/App.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Page from "./Page";

function App({ sr }) {
  return (
    <div className="App">
      <Nav />
      <Page sr={sr} />
      <Footer />
    </div>
  );
}
export default App;
