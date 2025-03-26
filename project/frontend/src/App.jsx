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
  TaskCard,
  EditTasksModal,
  ExpertsPage,
  BlogPage,
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
  AboutUs,
  HomePage,
  ContactUsPage,
} from "./admin/pages";

/* retail seller page imports  */

import SellerHome from "./seller/pages/sellerHP";
import SellerInventroy from "./seller/pages/sellerInventroy";

//import customer routes
import Home from "./customer/pages/Home";

import DashboardPage from "./customer/pages/DashboardPage";
import Cus_LandingBanner from "./customer/components/Cus_LandingBanner";
import CheckoutPage from "./customer/pages/CheckoutPage";






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
      <Route path="/farmer/:uid/editTask/:tid" element={<EditTasksModal />} />
      <Route path="/farmer/Blogs" element={<BlogPage />} />

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



      {/* Home page components */}


      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUsPage />} />

      {/* Retail seller Router */}


      <Route path='/seller/home' element={<SellerHome />} />
      <Route path='/seller/Inventroy' element={<SellerInventroy />} />





      {/* Customer Routes */}

      {/* <Route path='/products-Category/:categoryName' element={<CategoryPage />} />
        <Route path='/Home/Checkout' element={<CheckoutPage />} />
        <Route path='/user/Dashboard' element={<DashboardPage />} /> */}


        <Route path='/Customer' element={<Home />} />
        <Route path="/CusLanding" element={<Cus_LandingBanner/>}/>
        <Route path='/Customer/Dashboard' element={<DashboardPage />} />
        <Route path='/Home/Checkout' element={<CheckoutPage />} />








    </Routes>
  );
}

export default App;
