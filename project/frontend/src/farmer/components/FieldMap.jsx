import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "../extras/mapStyles.css";
import axios from "axios";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";

function FieldMap() {
  const { uid } = useParams();
  const [det, setDet] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(uid);
    axios
      .post("http://localhost:3000/api/v1/field/parameters", {
        farmerID: uid,
      })
      .then((res) => {
        setDet(res.data.data[0]);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [uid]);

  return (
    <div className="frame">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View
      </button>
      {det.xcordinate !== undefined && det.ycordinate !== undefined ? (
        <MapContainer center={[det.xcordinate, det.ycordinate]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[det.xcordinate, det.ycordinate]}>
            <Popup>Your farm</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}

export default FieldMap;
