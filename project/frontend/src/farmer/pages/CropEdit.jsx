import React from "react";
import Sidebar from "../components/Sidebar";
import CropInfo from "../components/CropInfo";
import CropEditComp from "../components/CropEditComp";
import { useNavigate } from "react-router-dom";
import { getUserIdFromToken } from "../utills/authUtils";
import { useEffect, useState } from "react";

function CropEdit() {
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
      <CropEditComp fid={userID} />
    </div>
  );
}

export default CropEdit;
