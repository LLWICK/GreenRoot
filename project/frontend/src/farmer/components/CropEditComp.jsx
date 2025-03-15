import React from "react";
import { Link } from "react-router-dom";

function CropEditComp() {
  let dis =
    "Temperature / drying temperature / humidity / CO2 are measured for initial drying / main drying / seed bulb storing management after harvest so as to conduct optimal environment management.";
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pMKA8_lDGcERGR4DzJxwF3Mg65OW0giKvg&s" // Replace with actual image URL
              alt="Hokaido Carrot"
              className="w-full h-auto rounded-md"
            />
            <button className="mt-2 text-sm text-blue-600 hover:underline">
              Change Image
            </button>
          </div>

          {/* Details Section */}
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-semibold">Hokaido Carrot</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600">Category</label>
                <select className="w-full border rounded p-2">
                  <option>Fruit Vegetable</option>
                </select>
              </div>

              <div>
                <label className="text-gray-600">Change Availability</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Changeable"
                />
              </div>

              <div>
                <label className="text-gray-600">Scope of Disclosure</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Disclosure"
                />
              </div>

              <div>
                <label className="text-gray-600">Place</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Greenhouse"
                />
              </div>

              <div>
                <label className="text-gray-600">Refecture</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Hokkaido"
                />
              </div>

              <div>
                <label className="text-gray-600">Crop</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Carrot"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-600">Author</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value="PS Solutions"
              />
            </div>

            <div>
              <label className="text-gray-600">Recipe Ver</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value="2"
              />
            </div>

            {/* Revision History */}
            <div className="mt-4">
              <h3 className="text-lg font-medium">Revision History</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>PS Solutions - Created: 2017/10/03</li>
                <li>AAA Agriculture - Created: 2017/12/03</li>
                <li>BBB Agriculture - Created: 2018/10/03</li>
                <li>CCC - Created: 2018/10/03</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-6">
          <h3 className="text-lg font-medium">Overview</h3>
          <input
            type="text"
            className="w-full border rounded p-3"
            value={dis}
          />
        </div>
        <div className="p-5">
          <Link
            class="float-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            to={"/farmer/viewCrop"}
          >
            Save Changes
          </Link>

          <Link
            to={"/farmer/cropProducts"}
            class="float-right focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CropEditComp;
