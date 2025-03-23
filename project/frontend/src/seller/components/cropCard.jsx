import React from "react";
import axios from "axios";

const Crop = ({ crop }) => {

    const farmer = crop.farmerID;

    //// ADD to cart

     // Handle adding crop to the cart
     const handleAddToCart = async () => {
        try {

            // Check if all crops in the cart are from the same farmer
            if (cartItems.length > 0 && cartItems[0].farmerID !== farmer) {
                window.alert("You can only add crops from the same farmer to the cart.");
                return;
            }

            const cropId = crop._id;
            const sellerId = "67d8e72067646fe0d3f87794"; // Replace with actual seller ID (maybe from context or props)
            
            const response = await axios.post('http://localhost:3000/api/retailSeller/cart/add', {
                cropId,
                sellerId,
            });

            if (response.status === 200) {
                // Optionally update the UI (e.g., show success notification)
                console.log('Crop added to cart:', response.data);
                window.alert("added to cart");
            }
        } catch (error) {
            console.error('Error adding crop to cart:', error.response?.data || error.message);
        }
    };






  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
      <img
        className="h-48 w-full object-cover object-end"
        src={crop.image}
        alt={crop.name}
      />
      <div className="p-6">
        <h4 className="font-semibold text-lg leading-tight truncate">{crop.name}</h4>
        <div className="mt-1 text-gray-700">${crop.price || "N/A"}</div>
        <div className="mt-2 flex items-center text-teal-600">
          ⭐⭐⭐⭐
          <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
        </div>
        <div className="mt-2 text-gray-600">
          <p><strong>Quantity:</strong> {crop.quantity}</p>
          <p><strong>Fertilizer:</strong> {crop.fertilizer || "Not specified"}</p>
        </div>
        <div className="flex space-x-2 mt-8 mb-4">
          <button className="bg-teal-700 text-white px-4 py-1 rounded flex items-center space-x-2" onClick={handleAddToCart}>
            <span>+ add to cart</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-1 rounded">
            ⋯ more <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crop;
