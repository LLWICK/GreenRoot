import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Sidebar from '../components/Sidebar';

const ChartPage = () => {
  const [orderQuantityData, setOrderQuantityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderNumber, setOrderNumber] = useState(0);

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
            order.cartItems.forEach((item) => {
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

        // Directly take the order number from the first order (or use the latest order as you need)
        const latestOrder = orders[0];  // Assuming you want the first order in the list or the latest
        setOrderNumber(latestOrder ? latestOrder.orderNumber : 0);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderQuantityData();
  }, []);

  // Calculate progress percentage based on the orderNumber
  const progressPercentage = (orderNumber / 15) * 100; // Assuming the upper limit is 15

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-green-700 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-xl">Error: {error}</div>;
  }

  const COLORS = ['#4caf50', '#e0e0e0']; // Green for progress, grey for remaining

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

          <h2 className="text-3xl font-semibold text-green-800 mt-16 mb-8 text-center">
            Order Progress: {orderNumber}/15
          </h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Progress', value: progressPercentage },
                    { name: 'Remaining', value: 100 - progressPercentage },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  {[
                    ...Array(2),
                  ].map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
