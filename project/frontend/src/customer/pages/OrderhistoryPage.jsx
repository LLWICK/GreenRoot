import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Button } from '@/components/ui/button';

const OrderhistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/api/customer/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-green-700 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-xl">Error: {error}</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-60 h-screen fixed">
        <Sidebar />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 ml-60 p-6 md:p-10 overflow-y-auto h-screen">
        <h2 className="text-3xl font-semibold text-green-900 mb-6 text-center">Order History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">Order #{order.orderNumber}</h3>
                <p className={`text-lg font-semibold mt-2 ${order.status === 'Cancelled' ? 'text-red-600' : 'text-green-700'}`}>
                  Status: {order.status}
                </p>
                <div className="mt-4 space-y-3">
                  {order.cartItems &&
                    order.cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover shadow-md border" />
                        )}
                        <div>
                          <h4 className="font-semibold text-green-800">{item.name}</h4>
                          <p className="text-gray-600 text-sm">Seller Id: {item.sellerId}</p>
                          <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-6 border-t pt-4">
                  <p className="text-lg font-semibold text-green-800">Buyer ID: {order.ordinary_buyer_id}</p>
                  <p className="text-lg font-semibold text-green-800 mt-2">Final Total: Rs.{order.finalTotal}</p>
                  <div className="mt-4 flex justify-end">
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md">
                      Cancel Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderhistoryPage;
