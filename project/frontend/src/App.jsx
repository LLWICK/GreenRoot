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
} from "./farmer/pages";
//import LandingPage from "./farmer/pages/LandingPage";

/*Import Researcher's pages */
import HomeResearcher from "./researcher/pages/HomeResearcher";
import Blog from "./researcher/pages/Blog";
import MyNews from "./researcher/pages/MyNews";
import BlogNews from "./researcher/pages/BlogNews";
import SingleNewsPage from "./researcher/pages/SingleNewsPage";
import MyQnA from "./researcher/pages/MyQnA";
import ReplyQnA from "./researcher/pages/ReplyQnA";

/* Admin pages */
import {
  LoginPage,
  AdminDashbord,
  FarmerManagement,
  UserManagement,
  ViewUser,
  EditUser,
  DeleteUser,
} from "./admin/pages";
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
      <Route path="/farmer/schedule" element={<Schedule />} />

      {/* Auth Router */}
      <Route path="/auth/login" element={<LoginPage />} />

      {/* Admin Routers */}
      <Route path="/admin/dashboard" element={<AdminDashbord />} />
      <Route path="/admin/user-management" element={<UserManagement />} />

      <Route
        path="/admin/user-management/farmer"
        element={<FarmerManagement />}
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
      {/* Researcher Routes */}
      <Route path="/researcher" element={<HomeResearcher/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/researcher/my-news" element={<MyNews/>}/>
      <Route path="/blog/news" element={<BlogNews/>}/>
      <Route path="/blog/news/:id" element={<SingleNewsPage/>}/>
      <Route path="/researcher/my-qna" element={<MyQnA/>}/>
      <Route path="/researcher/my-qna/reply/:id" element={<ReplyQnA/>}/>
    </Routes>
  );
}

export default App;
