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
  LandingPage,
  TestPage,
} from "./farmer/pages";

/* Admin pages */
import {
  LoginPage,
  RegisterPage,
  AdminDashbord,
  FarmerManagement,
  UserManagement,
  ViewUser,
  EditUser,
  DeleteUser,
  CreateUser,
  AdminManagament,
  CustomerManagement,
} from "./admin/pages";
import ExpertsPage from "./farmer/pages/ExpertsPage";
import TaskCard from "./farmer/modals/TaskCard";

//import customer routes
import Home from "./customer/pages/Home";






// import UserManagement from "./admin/pages/UserManagement";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Sidebar />} />

      {/* Farmer Router */}

      <Route path="/farmer/:uid/dashboard" element={<FarmerHome />} />
      <Route path="/farmer/:uid/cropProducts" element={<CropsHome />} />
      <Route path="/farmer" element={<LandingPage />} />
      <Route path="/farmer/viewCrop/:cid" element={<ViewCrop />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/farmer/crop/edit/:cid" element={<CropEdit />} />
      <Route path="/farmer/crop/addCrop" element={<AddCropPage />} />
      <Route path="/farmer/orders" element={<OrdersPage />} />
      <Route path="/farmer/:uid/schedule" element={<Schedule />} />
      <Route path="/farmer/test" element={<TestPage />} />
      <Route path="/farmer/:uid/experts" element={<ExpertsPage />} />
      <Route path="/farmer/:uid/addTask" element={<TaskCard />} />

      {/* Auth Router */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Admin Routers */}
      <Route path="/admin/:id/dashboard" element={<AdminDashbord />} />
      <Route path="/admin/user-management" element={<UserManagement />} />

      <Route
        path="/admin/user-management/farmer"
        element={<FarmerManagement />}
      />

      <Route
        path="/admin/user-management/customers"
        element={<CustomerManagement />}
      />
      <Route
        path="/admin/user-management/user/create"
        element={<CreateUser />}
      />

      <Route
        path="/admin/user-management/user/create"
        element={<CreateUser />}
      />

      <Route
        path="/admin/user-management/user/view/:id"
        element={<ViewUser />}
      />
      <Route
        path="/admin/user-management/user/edit/:id"
        element={<EditUser />}
      />
      <Route
        path="/admin/user-management/user/delete/:id"
        element={<DeleteUser />}
      />
      <Route
        path="/admin/user-management/admins"
        element={<AdminManagament />}
      />

      {/* Customer Routes */}


        <Route path='/Customer' element={<Home />} />
        {/* <Route path='/products-Category/:categoryName' element={<CategoryPage />} />
        <Route path='/Home/Checkout' element={<CheckoutPage />} />
        <Route path='/user/Dashboard' element={<DashboardPage />} /> */}






    </Routes>
  );
}

export default App;
