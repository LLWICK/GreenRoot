import React from "react";
import Sidebar from "../components/Sidebar";
import OrderPanel from "../components/OrderPanel";
import OrderTabs from "../components/OrderTabs";

function OrdersPage() {
  return (
    <div>
      <Sidebar />

      <OrderTabs />
    </div>
  );
}

export default OrdersPage;
