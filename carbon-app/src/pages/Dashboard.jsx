import React, { useState, useEffect, useReducer } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Button, buttonVariants } from '../components/ui/button';

// Register necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Reducer function for managing state updates
const carbonReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, action.payload];
    default:
      return state;
  }
};

const Dashboard = () => {
  // State for tracking carbon data
  const [carbonData, dispatch] = useReducer(carbonReducer, []);

  // Dummy data to simulate carbon tracking (in kg)
  const [newEntry, setNewEntry] = useState("");

  // Simulate adding daily carbon footprint data
  useEffect(() => {
    const initialData = [
      { date: "2024-03-12", value: 2.3 },
      { date: "2024-03-13", value: 2.8 },
      { date: "2024-03-14", value: 3.1 },
      { date: "2024-03-15", value: 2.5 },
    ];
    initialData.forEach((entry) =>
      dispatch({ type: "ADD_ENTRY", payload: entry })
    );
  }, []);

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
        tension: 0.2,
      },
    ],
  };

  // Handle adding a new carbon entry
  const handleAddEntry = () => {
    if (newEntry) {
      dispatch({
        type: "ADD_ENTRY",
        payload: { date: new Date().toISOString().split("T")[0], value: parseFloat(newEntry) },
      });
      setNewEntry("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">📊 Carbon Footprint Summary</h2>

      <div className="mb-6">
        <Line data={chartData} />
      </div>

      <div className="flex gap-2 justify-center">
        <input
          type="number"
          placeholder="Enter daily CO₂ (kg)"
          className="border rounded p-2 w-40"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button
          onClick={handleAddEntry}
          className="bg-white-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Entry
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
