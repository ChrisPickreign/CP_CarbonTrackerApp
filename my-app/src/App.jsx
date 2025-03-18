import { useState } from 'react'
import LandingPage from "./LandingPage";
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  return (
    <div>
      <NavBar /> 
      <main className="pt-20"> 
        <LandingPage />
      </main>
    </div>
  );
}

export default App
