import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"
import { Link } from "react-router-dom";

const ShadNavBar = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Logo / Name */}
        <h1 className="text-2xl font-bold">🌍 Carbon Tracker</h1>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6 text-lg">
            <NavigationMenuItem>
              <Link to="/" className="hover:underline">🏠 Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/feature1" className="hover:underline">🔹 Feature 1</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/feature2" className="hover:underline">🔹 Feature 2</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/feature3" className="hover:underline">🔹 Feature 3</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard" className="hover:underline">📊 Summary</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default ShadNavBar;
