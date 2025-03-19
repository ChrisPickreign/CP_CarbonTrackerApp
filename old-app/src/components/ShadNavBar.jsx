import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { Link } from "react-router-dom";

const ShadNavBar = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌍 Carbon Tracker</h1>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6 text-lg">
            <NavigationMenuItem>
              <Link to="/" className="hover:text-green-300 transition">🏠 Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard" className="hover:text-green-300 transition">📊 Summary Views</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/activity" className="hover:text-green-300 transition">📋 Activity Logging</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/goals" className="hover:text-green-300 transition">🎯 Goal Setting</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/resources" className="hover:text-green-300 transition">📚 Resource Library</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default ShadNavBar;


