import React from "react";
import Welcome from "./components/WelcomeScreen/Welcome";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>

      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
