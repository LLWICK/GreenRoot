import React from "react";
import Sidebar from "../components/Sidebar";
import ScheduleList from "../components/ScheduleList";
import WorkGraph from "../components/WorkGraph";
import ScheduleCards from "../components/ScheduleCards";

function Schedule() {
  return (
    <div>
      <Sidebar />
      <div style={{ float: "left", padding: "5%" }}>
        <ScheduleList />
      </div>

      <div style={{ float: "right" }}>
        <ScheduleCards />
      </div>
    </div>
  );
}

export default Schedule;
