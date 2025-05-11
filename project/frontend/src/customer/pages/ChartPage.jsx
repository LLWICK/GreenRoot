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

        // Get the latest order number
        const latestOrder = orders[0];
        setOrderNumber(latestOrder ? latestOrder.orderNumber : 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderQuantityData();
  }, []);

  // Post customer type based on orderNumber milestone
  useEffect(() => {
    const postCustomerType = async () => {
      let cus_type = null;

      if (orderNumber === 15) cus_type = "Bronze";
      else if (orderNumber === 30) cus_type = "Silver";
      else if (orderNumber === 45) cus_type = "Gold";
      else if (orderNumber === 60) cus_type = "Platinum";

      if (cus_type) {
        try {
          const response = await fetch('http://localhost:3000/api/customer/typeCustomer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cus_type }),
          });

          if (!response.ok) {
            throw new Error('Failed to post customer type');
          }

          console.log(`${cus_type} customer type posted successfully`);
        } catch (err) {
          console.error(`Error posting ${cus_type} customer type:`, err.message);
        }
      }
    };

    postCustomerType();
  }, [orderNumber]);

  const progressPercentage = (orderNumber / 15) * 100; // Adjust for progress bar logic
  const COLORS = ['#4caf50', '#e0e0e0']; // Green for progress, grey for remaining

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-green-700 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-xl">Error: {error}</div>;
  }

  return (
    <div className="flex h-screen bg-green-50">
      <div className="w-60 h-screen fixed">
        <Sidebar />
      </div>

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
                  {COLORS.map((color, index) => (
                    <Cell key={index} fill={color} />
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
