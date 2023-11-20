import React from "react";
import "../styles/App.css";
import { Layout } from "./Layout";
import Page from "./Page";

function App({ sr }) {
  return (
    <div className="App">
      <Layout>
      <Page sr={sr} />
      </Layout>
    </div>
  );
}
export default App;
