import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-green-400 text-white p-6">
      {/* Hero Section */}
      <header className="text-center">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          🌍 Carbon Tracker App
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Track your daily carbon footprint, set goals, and make a positive impact on the environment. 
        </p>
      </header>

      {/* Call-to-Action Button */}
      <div className="mt-8">
        <a
          href="/dashboard"
          className="bg-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm opacity-80">
        Made with 💚 for a Greener Future
      </footer>
    </div>
  );
};

export default LandingPage;
