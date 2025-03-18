import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CropEdit(prop) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [fertilizer, setFertilizer] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [overview, setOver] = useState("");

  const { cid } = useParams();

  useEffect(() => {
    // Simulate fetching crop data from an API
    const fetchCropData = async () => {
      try {
        axios.get(`http://localhost:3000/api/v1/crops/${cid}`).then((res) => {
          const data = res.data.data;
          //console.log(data);
          setName(data.name);
          setStatus(data.status);
          setPrice(data.price);
          setFertilizer(data.fertilizer);
          setQuantity(data.quantity);
          setImage(data.image);
          setOver(data.overview);
        });
      } catch (error) {
        console.error("Error fetching Categories:", error);
      }
    };

    fetchCropData();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const data = { name, status, price, fertilizer, quantity, image, overview };
    //console.log(data);

    axios
      .patch(`http://localhost:3000/api/v1/crops/${cid}`, data)
      .then(() => {
        navigate(`/farmer/${prop.fid}/cropProducts`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleForm}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image Section */}
              <div className="md:w-1/3">
                <img src={image} className="w-full h-auto rounded-md" />
                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  Change Image
                </button>
              </div>

              {/* Details Section */}
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-semibold">Hokaido Carrot</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600">Status</label>
                    <select
                      className="w-full border rounded p-2"
                      name="status"
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    >
                      <option value="on-field">On field</option>
                      <option value="off-field">Off field</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-600">Crop Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="w-full border rounded p-2"
                      name="name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-gray-600">
                      Price (per one kilo)
                    </label>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      className="w-full border rounded p-2"
                      name="price"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-gray-600">Fertilizer used</label>
                    <input
                      value={fertilizer}
                      onChange={(e) => setFertilizer(e.target.value)}
                      type="text"
                      className="w-full border rounded p-2"
                      name="fertilizer"
                    />
                  </div>

                  <div>
                    <label className="text-gray-600">Quantity (in m X m)</label>
                    <input
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      className="w-full border rounded p-2"
                      name="quantity"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-gray-600">Image Link</label>
                  <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    className="w-full border rounded p-2"
                    name="image"
                  />
                </div>

                {/* Revision History */}
              </div>
            </div>

            {/* Overview Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium">Overview</h3>
              <input
                value={overview}
                onChange={(e) => setOver(e.target.value)}
                type="text"
                className="w-full border rounded p-3"
                name="overview"
              />
            </div>
            <div className="p-5">
              <button
                type="submit"
                class="float-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Save Changes
              </button>

              <Link
                to={`/farmer/${prop.fid}/cropProducts`}
                class="float-right focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CropEdit;
