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
    return <div>Loading...</div>;
  }

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the order history
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Render the Sidebar component */}
      <div className="p-10 px-5 md:px-16 flex-grow">
        <h2 className="text-lg font-bold flex justify-between">
          Order History <span></span>
        </h2>
        {orders.map((order, index) => (
          <div key={order._id} className="mb-4 border p-2">
            <h3 className="font-semibold">Order #{order.orderNumber}</h3> {/*  orderNumber */}
            <p>Total Price: ${order.totalPrice}</p> {/* Display total price of the order */}
            {order.cartItems && order.cartItems.map((item) => (
              <div key={item.id} className="flex justify-around items-center my-2">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.status}
                    style={{ width: '70px', height: '70px' }}
                    className="border p-2"
                  />
                )}
                
                  <h2 className="font-bold">{item.name}</h2> {/* Display item status (name) */}
                  <p>Quantity: {item.quantity}</p> {/* Display item quantity */}
                  <p>Item Price: ${item.totalPrice}</p> {/* Display total price of the item */}
                
              </div>
            ))}
            <p>Delivery: ${order.delivery}</p>
            <p>Tax: ${order.tax}</p>
            <p>Final Total: ${order.finalTotal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderhistoryPage;