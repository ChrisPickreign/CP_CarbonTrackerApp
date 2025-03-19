import React, { useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const TrackingTable = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    activity: "",
    date: new Date(),
    location: "",
    co2Used: "",
  });

  const handleAddEntry = () => {
    if (!newEntry.activity || !newEntry.co2Used) return;
    setEntries([...entries, newEntry]);
    setNewEntry({ activity: "Please Choose an Activity", date: new Date(), location: "", co2Used: "" });
  };

  return (
    <div className="tracking-table-container">
      <h2 className="tracking-table-title">🌍 Carbon Footprint Activity Tracker</h2>

      {/* Data Table */}
      <Table className="tracking-table">
        <TableHeader>
          <TableRow>
            <TableHead>Please Choose an Activity</TableHead>
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
              <TableCell>{format(entry.date, "PPP")}</TableCell>
              <TableCell>{entry.location}</TableCell>
              <TableCell>{entry.co2Used} kg</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Input Form */}
      <div className="tracking-table-inputs">
        {/* Activity Dropdown */}
        <Select onValueChange={(value) => setNewEntry({ ...newEntry, activity: value })}>
          <SelectTrigger className="tracking-table-select">
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
            <Button variant="outline" className="tracking-table-date-btn">
              {newEntry.date ? format(newEntry.date, "PPP") : "Pick a date"}
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

        {/* Add Entry Button */}
        <Button onClick={handleAddEntry} className="tracking-table-add-btn">
          ➕ Add Entry
        </Button>
      </div>
    </div>
  );
};

export default TrackingTable;
