import React from "react";
import { Link } from "react-router-dom";

function AddCrop() {
  return (
    <div>
      <div>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="md:w-1/3">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAM1BMVEX///+/v7+8vLzq6urw8PDa2trX19fMzMz7+/vU1NTDw8P19fXR0dHHx8e5ubnn5+fh4eH9+CmsAAACtUlEQVR4nO3c6XaCMBAF4GZhJ8D7P22NRcmqI52Arff+6xHJ15BJQuH06wtBEARBkM9KJcUp6TXBNp1jExTbSf0GG2yw/TubPCA7bX1dPs0+m2yeH/zrKLnT1pa3zbDBBhtssMEGG2xk26C1Ht7SpkYxTVPfEU50tK1aN9FSLO9mc+4lpuq9bEq4YbmsbLbGuz3siM0vjy4/l23wuk0YWrW2xhxgm6WPo13UUQp1uE2SbFoK+aBszuy3obdH5q8+23jzbT1lvI32O3IubgvqtCbQ1qb78jbl2ijDrW2eHcu3LiyOjbJojeu5ZHYuZFxPl9t6Kik0fX8ckB2bnPsQ3ZnLR6aj1MFgtgGQ+1X492+0Tee4tStza8MB+97UeZX7gEdm1obytrbvomOdK2pPNp5lq2XcdkeaqYvbLmvmZZrwj1bBI7vMolrcdl0v/DnMv6I26WoobVu/4fXcKENbuhoK2362GvYL2wobbllErhoK28z99Peeu3O9pBova5vdvlnHXBd3W6YaitqCaawLGnRjEucraquDjXptZ+IkLbnF5LVVXr3psIsuPZe8oiL9EIrVNkh3MmibhCAtSzfParOdsuGWRBfln78mqoF1/3b95IZrX3yXJK4GTts69JX3Ez1RNTDa9O2zayNz1PaTxNXAaNtK0PZcZq54hAsBfDbttDLveesguuHis3kzV/V6t8XVwGbT6fZeSnDDxWaLN2UvJ7zh4rJF69OeTD6By8bQbVE1MNn0nrEfx7/hYrKxdFv45wce28BDC6qBx8bUbUE1sNiYRpsIqoHFxtZt/pu8LDbFGOe8n/NsFzbYYIPtfWw736EVZuZcDNKpdtoODmywwQYbbLDBBhtssMEGG2ywwQYbbLDBBttftE1H/PuLxD/EINjse/an5IC/yiMIgiAIgtDyDeEePpf+ljeGAAAAAElFTkSuQmCC" // Replace with actual image URL
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
                  <input type="text" className="w-full border rounded p-2" />
                </div>

                <div>
                  <label className="text-gray-600">Scope of Disclosure</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>

                <div>
                  <label className="text-gray-600">Place</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>

                <div>
                  <label className="text-gray-600">Refecture</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>

                <div>
                  <label className="text-gray-600">Crop</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-gray-600">Author</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="text-gray-600">Recipe Ver</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              {/* Revision History */}
            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium">Overview</h3>
            <input type="text" className="w-full border rounded p-3" />
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
    </div>
  );
}

export default AddCrop;
