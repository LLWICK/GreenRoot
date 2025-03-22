import React from "react";
import Sidebar from "../components/Sidebar";
import ScheduleList from "../components/ScheduleList";
import WorkGraph from "../components/WorkGraph";

function Schedule() {
  return (
    <div>
      <Sidebar />
      <div style={{ float: "left", padding: "5%" }}>
        <ScheduleList />
      </div>

      <div style={{ float: "right" }}>
        <WorkGraph />
      </div>
    </div>
  );
}

export default Schedule;
