import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MapView from "./components/MapView";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SearchLocation() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [xcordinate, setLatitude] = useState(null);
  const [ycordinate, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const handleOnChange = (data) => {
    //console.log(data);
    const { latitude, longitude, label } = data;
    setLatitude(Number(latitude));
    setLongitude(Number(longitude));
    setCity(label);
  };

  const handleSubmit = () => {
    if (!xcordinate || !ycordinate) {
      alert("Empty Fields!");
    } else {
      const data1 = { xcordinate, ycordinate, city, farmerID: uid };
      //console.log(data1);

      axios
        .post("http://localhost:3000/api/v1/field", data1)
        .then((res) => {
          navigate(`/farmer/${uid}/dashboard`);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <SearchBar onSearchChange={handleOnChange} />
      <div className="p-24">
        <button
          onClick={handleSubmit}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enter
        </button>
      </div>
      <MapView />
    </div>
  );
}

export default SearchLocation;
