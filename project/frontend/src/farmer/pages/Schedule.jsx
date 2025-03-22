import React from "react";
import Sidebar from "../components/Sidebar";
import ScheduleList from "../components/ScheduleList";

function Schedule() {
  return (
    <div>
      <Sidebar />
      <div style={{ float: "left", padding: "5%" }}>
        <ScheduleList />
      </div>
    </div>
  );
}

export default Schedule;
