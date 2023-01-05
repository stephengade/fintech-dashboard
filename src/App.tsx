import React from "react";
import Welcome from "./components/WelcomeScreen/Welcome";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import User from './components/Users/Users';
import UserDetails from "./components/Users/UserDetails/UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>

      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/userdetail" element={<UserDetails />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
