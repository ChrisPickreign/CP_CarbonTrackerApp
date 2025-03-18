import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShadNavBar from "./components/ShadNavBar";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <ShadNavBar /> {/* ✅ ShadCN NavBar now appears on all pages */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feature1" element={<h1 className="text-center mt-20">Feature 1 Page</h1>} />
          <Route path="/feature2" element={<h1 className="text-center mt-20">Feature 2 Page</h1>} />
          <Route path="/feature3" element={<h1 className="text-center mt-20">Feature 3 Page</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

