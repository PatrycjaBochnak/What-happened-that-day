import React from "react";
import { Layout } from "./layouts/Layout";
import Pages from "./pages/Pages";
import "./index.css";

function App({ sr }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Layout>
        <Pages sr={sr} />
      </Layout>
    </div>
  );
}
export default App;
