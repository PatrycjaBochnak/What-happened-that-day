import React from "react";
import "./styles/App.css";
import { Layout } from "./layouts/Layout";
import Pages from "./pages/Pages";

function App({ sr }) {
  return (
    <div className="App">
      <Layout>
        <Pages sr={sr} />
      </Layout>
    </div>
  );
}
export default App;
