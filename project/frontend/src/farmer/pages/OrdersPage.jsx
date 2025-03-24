import React from "react";
import Sidebar from "../components/Sidebar";
import OrderPanel from "../components/OrderPanel";
import OrderTabs from "../components/OrderTabs";
import OrderTable from "../components/OrderTable";

function OrdersPage() {
  return (
    <div>
      <Sidebar />
      <OrderTable />
    </div>
  );
}

export default OrdersPage;
