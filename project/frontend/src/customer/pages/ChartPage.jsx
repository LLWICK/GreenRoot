import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import Sidebar from '../components/Sidebar';

const ChartPage = () => {
  const [orderQuantityData, setOrderQuantityData] = useState([]);
  const [orderTotalData, setOrderTotalData] = useState([]);
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

        // Quantity per product name
        const statusQuantity = {};
        orders.forEach((order) => {
          if (order.cartItems && order.cartItems.length > 0) {
            order.cartItems.forEach((item) => {
              const name = item.name;
              statusQuantity[name] = (statusQuantity[name] || 0) + item.quantity;
            });
          }
        });

        const quantityData = Object.keys(statusQuantity).map((name) => ({
          name,
          quantity: statusQuantity[name],
        }));
        setOrderQuantityData(quantityData);

        // Line chart: final total vs date
        const totalData = orders
          .map((order) => ({
            date: new Date(order.createdAt).toLocaleDateString(),
            finalTotal: order.finalTotal || 0,
          }))
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setOrderTotalData(totalData);

        // Get latest order number
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cus_type }),
          });
          if (!response.ok) throw new Error('Failed to post customer type');
          console.log(`${cus_type} customer type posted successfully`);
        } catch (err) {
          console.error(`Error posting ${cus_type} customer type:`, err.message);
        }
      }
    };

    postCustomerType();
  }, [orderNumber]);

  const COLORS = ['#4caf50', '#ff9800', '#03a9f4', '#f44336', '#ab47bc', '#8bc34a', '#ffeb3b', '#9c27b0'];

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

      <div className="flex-1 ml-60 h-screen overflow-y-auto p-6 md:p-10 bg-cover bg-center"
      style={{ backgroundImage: `url('/customer_images/chart_background.jpg')` }}>
        <div >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Product Order Quantity (Bar Chart)
          </h2>

          {/* Bar Chart */}
          <div className="h-[400px] bg-white rounded-xl shadow-md p-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderQuantityData} margin={{ bottom: 30, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" label={{ value: 'Product', position: 'insideBottom', offset: -10 }} />
                <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft', offset: 10 }} />
                <Tooltip />
                <Bar dataKey="quantity" fill="#689f38" barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <h2 className="text-3xl font-semibold text-green-800 mt-16 mb-8 text-center">
            Product Order Quantity Distribution (Pie Chart)
          </h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderQuantityData}
                  dataKey="quantity"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {orderQuantityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <h2 className="text-3xl font-semibold text-green-800 mt-16 mb-8 text-center">
            Order Final Totals Over Time
          </h2>
          <div className="h-[400px] bg-white rounded-xl shadow-md p-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderTotalData} margin={{ bottom: 30, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottom', offset: -10 }} />
                <YAxis label={{ value: 'Final Total (Rs)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="finalTotal" stroke="#4caf50" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Progress */}
          <h2 className="text-3xl font-semibold text-green-800 mt-16 mb-8 text-center">
            Customer Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Bronze', value: 15, color: '#4caf50' },
              { title: 'Silver', value: 30, color: '#03a9f4' },
              { title: 'Gold', value: 45, color: '#fbc02d' },
              { title: 'Platinum', value: 60, color: '#ab47bc' }
            ].map(({ title, value, color }) => (
              <div key={title} className="bg-green-50 rounded-xl p-6 shadow-md text-center">
                <h3 className="text-xl font-bold mb-4" style={{ color }}>{title} ({value} Orders)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Progress', value: Math.min(orderNumber, value) },
                        { name: 'Remaining', value: Math.max(value - orderNumber, 0) },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill={color} />
                      <Cell fill="#e0e0e0" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <p className="mt-2 font-bold">{Math.min(orderNumber, value)}/{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
