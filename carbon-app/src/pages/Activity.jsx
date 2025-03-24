import React from "react";
import TrackingTable from "@/components/TrackingTable";

const Activity = ({ entries, setEntries }) => {
  return (
    <div>
      <TrackingTable entries={entries} setEntries={setEntries} />
    </div>
  );
};

export default Activity;