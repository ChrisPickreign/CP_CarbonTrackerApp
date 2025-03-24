import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const LOCAL_STORAGE_KEY = "activityEntries";

const TrackingTable = ({ entries, setEntries }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [newEntry, setNewEntry] = useState({
    activity: "",
    date: new Date(),
    location: "",
    co2Used: "",
  });

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored).map((entry) => ({
        ...entry,
        date: new Date(entry.date),
      }));
      setEntries(parsed);
    }
  }, [setEntries]);

  // Save to localStorage on entries change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    if (!newEntry.activity || !newEntry.co2Used) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    const updated = [...entries, newEntry];
    setEntries(updated);
    setNewEntry({
      activity: "",
      date: new Date(),
      location: "",
      co2Used: "",
    });
  };

  // Clear localStorage on clear entries
  const handleClearEntries = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setEntries([]);
  };

  return (
    <div className="tracking-table-container">
      <h2 className="tracking-table-title">🌍 Carbon Footprint Activity Tracker</h2>

      {showAlert && (
        <Alert variant="destructive" className="tracking-alert">
          <AlertTitle>⚠️ Error</AlertTitle>
          <AlertDescription>Please make sure all input fields are filled out.</AlertDescription>
        </Alert>
      )}

      {/* Data Table */}
      <Table className="tracking-table">
        <TableHeader>
          <TableRow>
            <TableHead>Activity</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>CO2 Used</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.activity}</TableCell>
              <TableCell>{format(new Date(entry.date), "yyyy-MM-dd")}</TableCell>
              <TableCell>{entry.location}</TableCell>
              <TableCell>{entry.co2Used} kg</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Input Form */}
      <div className="tracking-table-inputs mt-4">
        {/* Activity Dropdown */}
        <Select onValueChange={(value) => setNewEntry({ ...newEntry, activity: value })}>
          <SelectTrigger className="tracking-table-select bg-green-100">
            <SelectValue placeholder="Select Activity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Driving">🚗 Driving</SelectItem>
            <SelectItem value="Public Transport">🚌 Public Transport</SelectItem>
            <SelectItem value="Cycling">🚲 Cycling</SelectItem>
            <SelectItem value="Walking">🚶 Walking</SelectItem>
          </SelectContent>
        </Select>

        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="tracking-table-date-btn bg-green-100">
              {newEntry.date ? format(newEntry.date, "yyyy-MM-dd") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <Calendar
              mode="single"
              selected={newEntry.date}
              onSelect={(date) => setNewEntry({ ...newEntry, date })}
            />
          </PopoverContent>
        </Popover>

        {/* Location Input */}
        <Input
          type="text"
          placeholder="Enter Location"
          value={newEntry.location}
          onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
          className="tracking-table-input"
        />

        {/* CO2 Used Input */}
        <Input
          type="text"
          placeholder="CO2 Used (kg)"
          value={newEntry.co2Used}
          onChange={(e) => setNewEntry({ ...newEntry, co2Used: e.target.value })}
          className="tracking-table-input"
        />

        <div>
           {/* Add Entry Button */}
        <Button onClick={handleAddEntry} className="tracking-table-add-btn">
          ➕ Add Entry
        </Button>
        <Button variant="destructive" onClick={handleClearEntries} className="tracking-table-add-btn">
          ❌ Clear All Entries
        </Button>
        </div>
      </div>
    </div>
  );
};

export default TrackingTable;
