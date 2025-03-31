import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
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
        const response = await fetch('http://localhost:3000/api/customer/orders'); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const orders = await response.json();
        const statusQuantity = {};

        // Sum quantities by status
        orders.forEach((order) => {
          if (order.cartItems && order.cartItems.length > 0) {
            order.cartItems.forEach(item => {
              const name = item.name;
              statusQuantity[name] = (statusQuantity[name] || 0) + item.quantity;
            });
          }
        });

        // Convert counts to array for recharts
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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar />
      <div className="mx-auto mt-16 mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          Product Order Quantity
        </h2>
        <BarChart width={500} height={400} data={orderQuantityData} margin={{ bottom: 30, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" label={{ value: 'Product', position: 'insideBottom', offset: -10 }} style={{ fontSize: '12px' }} />
          <YAxis label={{ value: 'Total Quantity Ordered', angle: -90, position: 'insideLeft', offset: 10 }} style={{ fontSize: '12px' }} />
          <Tooltip contentStyle={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '5px' }} />
          <Bar dataKey="quantity" fill="#689f38" barSize={60} /> {/* Increased barSize here */}
        </BarChart>
      </div>
    </div>
  );
};

export default ChartPage;