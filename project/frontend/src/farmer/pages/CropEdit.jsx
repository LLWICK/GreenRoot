import React from "react";
import Sidebar from "../components/Sidebar";
import CropInfo from "../components/CropInfo";
import CropEditComp from "../components/CropEditComp";

function CropEdit() {
  return (
    <div>
      <Sidebar />
      <CropEditComp />
    </div>
  );
}

export default CropEdit;
