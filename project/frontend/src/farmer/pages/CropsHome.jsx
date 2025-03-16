import React from "react";
import Sidebar from "../components/Sidebar";
import CropChart from "../components/CropChart";
import CropTable from "../components/CropTable";

function CropsHome() {
  return (
    <div>
      <Sidebar />
      <div style={{ float: "left", marginLeft: "10%" }}>
        <CropChart />
        <CropTable />
      </div>
    </div>
  );
}

export default CropsHome;
