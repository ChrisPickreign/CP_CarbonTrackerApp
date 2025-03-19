import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-green-700 drop-shadow-lg">
          🌍 Carbon Tracker App
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Track your daily carbon footprint, set goals, and make a positive impact on the environment.
        </p>
      </header>

      <div className="mt-8">
        <a
          href="/dashboard"
          className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

