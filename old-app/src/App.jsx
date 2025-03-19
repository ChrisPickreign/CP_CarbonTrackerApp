import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShadNavBar from "./components/ShadNavBar";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Resources from "./pages/Resources";
import Activity from "./pages/Activity";


function App() {
  return (
    <Router>
      <ShadNavBar />
      <main className="w-screen h-screen flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

