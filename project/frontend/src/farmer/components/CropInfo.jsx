import React from "react";
import { Link } from "react-router-dom";

function CropInfo() {
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
          </div>

          {/* Details Section */}
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-semibold">
              Hokaido Carrot <Link to={"/farmer/crop/edit"}>✏️</Link>
            </h2>

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
                  readOnly
                />
              </div>

              <div>
                <label className="text-gray-600">Scope of Disclosure</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Disclosure"
                  readOnly
                />
              </div>

              <div>
                <label className="text-gray-600">Place</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Greenhouse"
                  readOnly
                />
              </div>

              <div>
                <label className="text-gray-600">Refecture</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Hokkaido"
                  readOnly
                />
              </div>

              <div>
                <label className="text-gray-600">Crop</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value="Carrot"
                  readOnly
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-600">Author</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value="PS Solutions"
                readOnly
              />
            </div>

            <div>
              <label className="text-gray-600">Recipe Ver</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value="2"
                readOnly
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
          <p className="text-gray-700 text-sm">
            Temperature / drying temperature / humidity / CO2 are measured for
            initial drying / main drying / seed bulb storing management after
            harvest so as to conduct optimal environment management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CropInfo;
