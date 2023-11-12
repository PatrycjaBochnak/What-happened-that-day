import React from "react";
import "../styles/App.css";
import { Layout } from "./Layout";
import Pages from "./Pages";

function App({ sr }) {
  return (
    <Layout>
      <Pages sr={sr} />
    </Layout>
  );
};

export default App;
