import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShadNavBar from "./components/ShadNavBar";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Resources from "./pages/Resources";
import Activity from "./pages/Activity";
import Footer from "./components/Footer";

function App() {
  const [entries, setEntries] = useState([]);

  return (
    <Router>
      <ShadNavBar />
      <main className="w-screen h-screen flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard activityEntries={entries} />} />
          <Route path="/activity" element={<Activity setEntries={setEntries} entries={entries} />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;



