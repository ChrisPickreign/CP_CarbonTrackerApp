import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Name / Logo */}
        <h1 className="text-2xl font-bold">🌍 Carbon Tracker</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:underline cursor-pointer">
              <Link to="/">🏠 Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/feature1">🔹 Feature 1</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/feature2">🔹 Feature 2</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/feature3">🔹 Feature 3</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard">📊 Summary</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;


