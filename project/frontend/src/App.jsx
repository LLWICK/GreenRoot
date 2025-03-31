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

import SearchLocation from "./farmer/unregistered/SearchLocation";

//import LandingPage from "./farmer/pages/LandingPage";

/*Import Researcher's pages */
import HomeResearcher from "./researcher/pages/HomeResearcher";
import Blog from "./researcher/pages/Blog";
import MyNews from "./researcher/pages/MyNews";
import BlogNews from "./researcher/pages/BlogNews";
import SingleNewsPage from "./researcher/pages/SingleNewsPage";
import MyQnA from "./researcher/pages/MyQnA";
import ReplyQnA from "./researcher/pages/ReplyQnA";
import MyGrowingGuide from "./researcher/pages/MyGrowingGuide";
import GrowingGuideBlog from "./researcher/pages/GrowingGuideBlog";
import SingleGrowingGuide from "./researcher/pages/SingleGrowingGuide";

/* Admin pages */
import {
  LoginPage,
  RegisterPage,
  AdminDashboard,
  FarmerManagement,
  UserManagement,
  ViewUser,
  EditUser,
  DeleteUser,
  CreateUser,
  AdminManagament,
  CustomerManagement,
  SellerManagement,
  ResearchersManagement,
  AboutUs,
  HomePage,
  ContactUsPage,
  ServicesPage,
  BlogsPage
} from "./admin/pages";

/* retail seller page imports  */

import SellerHome from "./seller/pages/sellerHP";
import SellerInventroy from "./seller/pages/sellerInventroy";

//import customer routes
import Home from "./customer/pages/Home";
import SellerBulkOrders from "./seller/pages/sellerBulkOrders";

import DashboardPage from "./customer/pages/DashboardPage";
import Cus_LandingBanner from "./customer/components/Cus_LandingBanner";
import CheckoutPage from "./customer/pages/CheckoutPage";
import SellerNormalOrders from "./seller/pages/sellerNormalOrders";
import FinalizeOrder from "./seller/pages/sellerfinalizeOrder";
import SellerStat from "./seller/pages/sellerStat";
import BulkOrderSummary from "./seller/pages/sellerBulkOrderSummary";

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
      <Route path="/farmer/:uid/orders" element={<OrdersPage />} />
      <Route path="/farmer/:uid/schedule" element={<Schedule />} />
      <Route path="/farmer/test" element={<TestPage />} />
      <Route path="/farmer/:uid/experts" element={<ExpertsPage />} />
      <Route path="/farmer/:uid/addTask" element={<TaskCard />} />
      <Route path="/farmer/:uid/editTask/:tid" element={<EditTasksModal />} />
      <Route path="/farmer/Blogs" element={<BlogPage />} />
      <Route path="/farmer/:uid/addMap" element={<SearchLocation />} />

      {/* Auth Router */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Admin Routers */}
      <Route path="/admin/:id/dashboard" element={<AdminDashboard />} />
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
      <Route
        path="/admin/user-management/sellers"
        element={<SellerManagement />}
      />
      <Route
        path="/admin/user-management/researchers"
        element={<ResearchersManagement />}
      />

      {/* Home page components */}
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/" element={<HomePage />} />



      {/* Researcher Routes */}
      <Route path="/researcher" element={<HomeResearcher />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/researcher/my-news" element={<MyNews />} />
      <Route path="/blog/news" element={<BlogNews />} />
      <Route path="/blog/news/:id" element={<SingleNewsPage />} />
      <Route path="/researcher/my-qna" element={<MyQnA />} />
      <Route path="/researcher/my-qna/reply/:id" element={<ReplyQnA />} />
      <Route path="/researcher/my-growing-guide" element={<MyGrowingGuide />} />
      <Route path="/blog/growing-guide" element={<GrowingGuideBlog />} />
      <Route path="/blog/growing-guide/:id" element={<SingleGrowingGuide />} />

      {/* Retail seller Router */}

      <Route path="/seller/home" element={<SellerHome />} />
      <Route path="/seller/Inventroy" element={<SellerInventroy />} />
      <Route path="/seller/bulkOrders" element={<SellerBulkOrders />} />
      <Route path="/seller/normalOrders" element={<SellerNormalOrders />} />
      <Route path="/seller/placeOrder" element={<FinalizeOrder />} />
      <Route path="/seller/stat" element={<SellerStat/>} />
      <Route path="/seller/BulkOrder/:orderId" element={<BulkOrderSummary/>} />

      {/* Customer Routes */}

      {/* <Route path='/products-Category/:categoryName' element={<CategoryPage />} />
        <Route path='/Home/Checkout' element={<CheckoutPage />} />
        <Route path='/user/Dashboard' element={<DashboardPage />} /> */}

      <Route path="/Customer" element={<Home />} />
      <Route path="/CusLanding" element={<Cus_LandingBanner />} />
      <Route path="/Customer/Dashboard" element={<DashboardPage />} />
      <Route path="/Home/Checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
