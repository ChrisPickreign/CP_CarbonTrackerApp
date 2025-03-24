import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils"; // Ensure this utility function exists

const navLinks = [
  { title: "Activity Logging", href: "/activity" },
  { title: "Summary Views", href: "/dashboard" },
  // { title: "Goal Setting", href: "/goals" },
  { title: "Resource Library", href: "/resources" },
];

const ShadNavBar = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="nav-link">
        <img src="/earth-day-svgrepo-com.svg" alt="Carbon Tracker Logo" className="nav-logo-img" />
        <span>Carbon Tracker</span>
      </Link>

        {/* Right: Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between items-center space-x-8 text-lg list-none">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.href}
                    className="nav-link"
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default ShadNavBar;




