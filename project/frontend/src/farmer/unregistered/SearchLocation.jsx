import React from "react";
import SearchBar from "./components/SearchBar";
import MapView from "./components/MapView";

function SearchLocation() {
  const handleOnChange = (data) => {
    data.value;
  };

  return (
    <div>
      <SearchBar onSearchChange={handleOnChange} />
      <div className="p-24">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enter
        </button>
      </div>
      <MapView />
    </div>
  );
}

export default SearchLocation;
