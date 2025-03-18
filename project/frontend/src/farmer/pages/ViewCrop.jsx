import React, { useEffect, useState } from "react";
import CropInfo from "../components/CropInfo";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { getUserIdFromToken } from "../utills/authUtils";

function ViewCrop() {
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
      <Sidebar />
      <CropInfo />
    </div>
  );
}

export default ViewCrop;
