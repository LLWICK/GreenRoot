import React from "react";
import Sidebar from "../components/Sidebar";
import PaymentWindow from "../utills/PaymentWindow";
import NavBar from "@/admin/pages/home/home_components/NavBar";

function TestPage() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <PaymentWindow />
    </div>
  );
}

export default TestPage;
