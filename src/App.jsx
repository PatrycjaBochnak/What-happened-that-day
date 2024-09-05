import React from "react";
import { Layout } from "./layouts/Layout";
import Pages from "./pages/Pages";
import "./index.css";

function App({ sr }) {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <Layout>
        <Pages sr={sr} />
      </Layout>
    </div>
  );
}
export default App;
