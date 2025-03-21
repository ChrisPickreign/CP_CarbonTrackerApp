import React, { useState, useEffect, useReducer } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useLocation } from "react-router-dom"; // Detects tab changes
import { Button } from "../components/ui/button";
import { format } from "date-fns";

// Register necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Reducer function for managing state updates
const carbonReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const updatedData = [...state, action.payload];
      localStorage.setItem("carbonData", JSON.stringify(updatedData)); // Store in localStorage
      return updatedData;
    case "LOAD_ENTRIES":
      return action.payload;
    default:
      return state;
  }
};

const Dashboard = ({ activityEntries }) => {
  const location = useLocation(); // Detects navigation changes
  const [carbonData, dispatch] = useReducer(carbonReducer, [], () => {
    const storedData = localStorage.getItem("carbonData");
    return storedData ? JSON.parse(storedData) : [];
  });

  // Initialize with zero point at (0,0)
  useEffect(() => {
    if (carbonData.length === 0) {
      dispatch({ type: "ADD_ENTRY", payload: { date: "2025-01-01", value: 0 } });
    }
  }, []);

  // Sync activity log with dashboard chart
  useEffect(() => {
    if (activityEntries.length > 0) {
      activityEntries.forEach((entry) => {
        dispatch({
          type: "ADD_ENTRY",
          payload: {
            date: format(new Date(entry.date), "yyyy-MM-dd"), // Format to YYYY-MM-DD
            value: parseFloat(entry.co2Used),
          },
        });
      });
    }
  }, [activityEntries]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("carbonData"));
    if (storedEntries) {
      dispatch({ type: "LOAD_ENTRIES", payload: storedEntries });
    }
  }, [location.pathname]); // Ensures data persists across navigation

  // Chart.js Data Configuration
  const chartData = {
    labels: carbonData.map((entry) => entry.date),
    datasets: [
      {
        label: "Carbon Footprint (kg CO₂)",
        data: carbonData.map((entry) => entry.value),
        fill: false,
        backgroundColor: "rgba(34, 197, 94, 1)", // Green
        borderColor: "rgba(34, 197, 94, 0.6)",
        pointRadius: 5, // Ensures points are visible
        tension: 0, // Prevents curve smoothing
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true, // Ensure y-axis starts at 0
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        📊 Carbon Footprint Summary
      </h2>

      <div className="mb-6">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;


