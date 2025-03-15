import React from "react";
import "leaflet/dist/leaflet.css";
import "../extras/mapStyles.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function FieldMap() {
  return (
    <div className="frame">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View
      </button>
      <MapContainer center={[7.2906, 80.6337]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[7.2906, 80.6337]}>
          <Popup>Your farm</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default FieldMap;
