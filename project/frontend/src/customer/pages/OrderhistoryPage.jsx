import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const OrderhistoryPage = () => {
  // State variables to manage orders, loading, and errors
  const [orders, setOrders] = useState([]); // Array to store fetched orders
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // useEffect hook to fetch orders when the component mounts
  useEffect(() => {
    // Function to fetch orders from the API
    const fetchOrders = async () => {
      setLoading(true); // Set loading to true while fetching
      setError(null); // Reset error state
      try {
        // Fetch orders from the API endpoint
        const response = await fetch('http://localhost:3000/api/customer/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders'); // Throw error if response is not OK
        }
        const data = await response.json(); // Parse JSON response
        setOrders(data); // Store fetched orders in the state
      } catch (err) {
        setError(err.message); // Store error message in the state
      } finally {
        setLoading(false); // Set loading to false after fetching (success or failure)
      }
    };

    fetchOrders(); // Call the fetchOrders function
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Render loading message if loading is true
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // Render error message if there's an error
  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  // Render the order history
  return (
    <div className="flex h-screen bg-green-100">
      <Sidebar />
      <div className="p-6 md:p-10 flex-grow">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">
          Order History
        </h2>
        {orders.map((order) => (
          <div key={order._id} className="mb-4 border border-green-200 rounded-lg p-4 bg-white shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Order #{order.orderNumber}
            </h3>
            
            <p className="text-gray-700 mb-4">Total Price: ${order.totalPrice}</p>
            {order.cartItems &&
              order.cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b border-green-100">
                  <div className="flex items-center space-x-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-md object-cover border border-green-200"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-green-800">{item.name}</h4>
                      <p className="text-gray-700">Seller Id : {item.sellerId}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Item Price: ${item.totalPrice}</p>
                </div>
              ))}
            <div className="mt-4 pt-4 border-t border-green-200">
              
              <p className="text-lg font-semibold text-green-800 mt-2">Final Total: ${order.finalTotal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderhistoryPage;