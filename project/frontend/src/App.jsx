import React from "react";
import { Route, Routes } from "react-router-dom";

{
  /* Farmer Pages imports */
}

import {
  FarmerHome,
  CropsHome,
  ViewCrop,
  ErrorPage,
  CropEdit,
  AddCropPage,
  OrdersPage,
  Schedule,
} from "./farmer/pages";

function App() {
  return (
    <Routes>
      {/* Farmer Router */}

      <Route path="/farmer/dashboard" element={<FarmerHome />} />
      <Route path="/farmer/cropProducts" element={<CropsHome />} />
      <Route path="/farmer/viewCrop" element={<ViewCrop />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/farmer/crop/edit" element={<CropEdit />} />
      <Route path="/farmer/crop/addCrop" element={<AddCropPage />} />
      <Route path="/farmer/orders" element={<OrdersPage />} />
      <Route path="/farmer/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
