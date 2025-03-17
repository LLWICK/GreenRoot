import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Common/Sidebar";

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

/* Admin pages */
import {
  LoginPage,
  AdminDashbord
} from "./admin/pages";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Sidebar />} />

      {/* Farmer Router */}

      {/* <Route path="/farmer/:uid/dashboard" element={<FarmerHome />} /> */}
      <Route path="/farmer/:uid/cropProducts" element={<CropsHome />} />
      <Route path="/farmer" element={<LandingPage />} />
      <Route path="/farmer/viewCrop" element={<ViewCrop />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/farmer/crop/edit" element={<CropEdit />} />
      <Route path="/farmer/crop/addCrop" element={<AddCropPage />} />
      <Route path="/farmer/orders" element={<OrdersPage />} />
      <Route path="/farmer/schedule" element={<Schedule />} />

      {/* Auth Router */}
      <Route path="/auth/login" element={<LoginPage />} />

      {/* Admin Routers */}
      <Route path="/admin/dashboard" element={<AdminDashbord />} />

    </Routes>
  );
}

export default App;
