import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/Sidebar';

const ChartPage = () => {
  const [orderQuantityData, setOrderQuantityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderQuantityData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/api/customer/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const orders = await response.json();
        const statusQuantity = {};

        orders.forEach((order) => {
          if (order.cartItems && order.cartItems.length > 0) {
            order.cartItems.forEach(item => {
              const name = item.name;
              statusQuantity[name] = (statusQuantity[name] || 0) + item.quantity;
            });
          }
        });

        const data = Object.keys(statusQuantity).map((name) => ({
          name,
          quantity: statusQuantity[name],
        }));

        setOrderQuantityData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderQuantityData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-green-700 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-xl">Error: {error}</div>;
  }

  return (
    <div className="flex h-screen bg-green-50">
      {/* Fixed Sidebar */}
      <div className="w-60 h-screen fixed">
        <Sidebar />
      </div>

      {/* Scrollable Main Content */}
      <div className="flex-1 ml-60 h-screen overflow-y-auto p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Product Order Quantity
          </h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderQuantityData} margin={{ bottom: 30, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="name"
                  label={{ value: 'Product', position: 'insideBottom', offset: -10 }}
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  label={{ value: 'Total Quantity Ordered', angle: -90, position: 'insideLeft', offset: 10 }}
                  style={{ fontSize: '12px' }}
                />
                <Tooltip contentStyle={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '8px' }} />
                <Bar dataKey="quantity" fill="#689f38" barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
