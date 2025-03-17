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
import LandingPage from "./farmer/pages/LandingPage";

/*Import Researcher's pages */
import HomeResearcher from "./researcher/pages/HomeResearcher";
import Blog from "./researcher/pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Sidebar />} />
 
      {/* Farmer Router */}

      <Route path="/farmer/:uid/dashboard" element={<FarmerHome />} />
      <Route path="/farmer/:uid/cropProducts" element={<CropsHome />} />
      <Route path="/farmer" element={<LandingPage />} />
      <Route path="/farmer/viewCrop" element={<ViewCrop />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/farmer/crop/edit" element={<CropEdit />} />
      <Route path="/farmer/crop/addCrop" element={<AddCropPage />} />
      <Route path="/farmer/orders" element={<OrdersPage />} />
      <Route path="/farmer/schedule" element={<Schedule />} />

      {/* Researcher Routes */}
      <Route path="/researcher/home" element={<HomeResearcher/>}/>
      <Route path="/blog" element={<Blog/>}/>


    </Routes>
  );
}

export default App;
