import React from "react";

const NavBar = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Name / Logo */}
        <h1 className="text-2xl font-bold">🌍 Carbon Tracker</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:underline cursor-pointer">Summary Views</li>
            <li className="hover:underline cursor-pointer">Goal Setting</li>
            <li className="hover:underline cursor-pointer">Notifications</li>
            <li className="hover:underline cursor-pointer">Customizable UI</li>
            <li className="hover:underline cursor-pointer">Local Storage</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

