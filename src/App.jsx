import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import Pages from "./pages/Pages";
import MessagePage from "./pages/MessagePage";
import "./index.css";

function App({ sr }) {
  return (
    <div className="min-h-screen bg-blue-200 text-gray-800">
      <Router>
        <Layout>
          <Routes>
            <Route path="/message" element={<MessagePage />} />
            <Route path="*" element={<Pages sr={sr} />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
export default App;
