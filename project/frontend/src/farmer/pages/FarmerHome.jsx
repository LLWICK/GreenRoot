import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StockchartFrame from "../components/StockchartFrame";
import JobsHome from "../components/JobsHome";
import FieldMap from "../components/FieldMap";
import SummaryCards from "../components/SummaryCards";
import ExpensesGraph from "../components/ExpensesGraph";

import { useNavigate } from "react-router-dom";
import { getUserIdFromToken } from "../utills/authUtils";
import WeatherCards from "../components/WeatherCards";
import Header from "../components/Header";
import Sidebar2 from "../tests/Sidebar2";

function FarmerHome() {
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const userId = getUserIdFromToken();

    if (userId) {
      setUserID(userId);
    } else {
      navigate(`/farmer`);
    }
  }, []);

  return (
    <div>
      <Sidebar uid={userID} />

      <div style={{ float: "left", padding: "2%" }}>
        <WeatherCards />
        <FieldMap />
        <div>
          <ExpensesGraph />
        </div>
      </div>

      <div style={{ float: "right", padding: "1.3%" }}>
        <StockchartFrame />
        <JobsHome />
      </div>
    </div>
  );
}

export default FarmerHome;
