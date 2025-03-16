import React from "react";
import Sidebar from "../components/Sidebar";
import StockchartFrame from "../components/StockchartFrame";
import JobsHome from "../components/JobsHome";
import FieldMap from "../components/FieldMap";
import SummaryCards from "../components/SummaryCards";
import ExpensesGraph from "../components/ExpensesGraph";

function FarmerHome() {
  return (
    <div>
      <Sidebar />

      <div style={{ float: "left", padding: "2%" }}>
        <FieldMap />
        <div>
          <ExpensesGraph />
        </div>
      </div>

      <div style={{ float: "right", padding: "1.3%" }}>
        <StockchartFrame />
        <JobsHome />
      </div>
    </div>
  );
}

export default FarmerHome;
