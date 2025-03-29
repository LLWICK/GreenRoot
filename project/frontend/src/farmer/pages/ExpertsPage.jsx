import React from "react";
import Sidebar from "../components/Sidebar";
import QADashboard from "../components/QADashboard";
import NavBFarmer from "../extras/NavBFarmer";

function ExpertsPage() {
  return (
    <div>
      <NavBFarmer />
      <Sidebar />
      <QADashboard />
    </div>
  );
}

export default ExpertsPage;
