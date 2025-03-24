import React, { useEffect, useReducer, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "../components/ui/button";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Reducer for managing carbon footprint data
const carbonReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const updated = [...state, action.payload];
      localStorage.setItem("carbonData", JSON.stringify(updated));
      return updated;
    case "SET_ENTRIES":
      localStorage.setItem("carbonData", JSON.stringify(action.payload));
      return action.payload;
    case "CLEAR_ALL":
      localStorage.removeItem("carbonData");
      return [{ date: "2025-01-01", value: 0 }];
    default:
      return state;
  }
};

const Dashboard = ({ activityEntries }) => {
  const location = useLocation();

  // Load carbon footprint data from localStorage
  const [carbonData, dispatch] = useReducer(carbonReducer, [], () => {
    const stored = localStorage.getItem("carbonData");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.length > 0 ? parsed : [{ date: "2025-01-01", value: 0 }];
    }
    return [{ date: "2025-01-01", value: 0 }];
  });

  const addedEntries = useRef(
    new Set(carbonData.map((entry) => `${entry.date}-${entry.value}`))
  );

  useEffect(() => {
    console.log("carbonData:", carbonData);
  }, [carbonData]);

  // Add new entries from activity log
  useEffect(() => {
    activityEntries.forEach((entry) => {
      const formattedDate = format(new Date(entry.date), "yyyy-MM-dd");
      const id = `${formattedDate}-${entry.co2Used}`;
      if (!addedEntries.current.has(id)) {
        dispatch({
          type: "ADD_ENTRY",
          payload: { date: formattedDate, value: parseFloat(entry.co2Used) },
        });
        addedEntries.current.add(id);
      }
    });
  }, [activityEntries]);

  // Load data from localStorage on page change
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("carbonData"));
    if (stored) {
      dispatch({ type: "SET_ENTRIES", payload: stored });
    }
  }, [location.pathname]);

  // Clear all entries
  const handleClear = () => {
    dispatch({ type: "CLEAR_ALL" });
    addedEntries.current = new Set(["2025-01-01-0"]);
  };

  // Sync activity log with carbon footprint data
  const handleSync = () => {
    const synced = activityEntries.map((entry) => ({
      date: format(new Date(entry.date), "yyyy-MM-dd"),
      value: parseFloat(entry.co2Used),
    }));
    const newEntries = [{ date: "2025-01-01", value: 0 }, ...synced];
    dispatch({ type: "SET_ENTRIES", payload: newEntries });
    addedEntries.current = new Set(
      newEntries.map((entry) => `${entry.date}-${entry.value}`)
    );
  };

  // Chart data and options
  const chartData = {
    labels: carbonData.map((entry) => entry.date),
    datasets: [
      {
        label: "Carbon Footprint (kg CO₂)",
        data: carbonData.map((entry) => entry.value),
        fill: false,
        backgroundColor: "rgba(34, 197, 94, 1)",
        borderColor: "rgba(34, 197, 94, 0.6)",
        pointRadius: 5,
        tension: 0,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: { beginAtZero: true },
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

      <div className="flex justify-center gap-4">
        <Button onClick={handleClear} className="bg-red-600 hover:bg-red-700 text-white">
          Clear All Entries
        </Button>
        <Button onClick={handleSync} className="bg-green-600 hover:bg-green-700 text-white">
          Sync Activity Log
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;