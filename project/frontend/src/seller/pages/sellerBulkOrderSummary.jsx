import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BulkOrderSummary() {
  const { orderId } = useParams();
  
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch order data using axios when the component mounts
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/api/RetailSeller/bulkOrder/getOrder/${orderId}`);
        setOrderData(response.data.order);
      } catch (err) {
        setError('Failed to fetch order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!orderData) {
    return <div>No order data available</div>;
  }

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Crop Order Tracking
        </h2>

        

        <div className="container mx-auto flex flex-col flex-wrap px-5 pt-12 pb-8 mb-2">
          <div className="bg-slate-50 mx-auto mt-4 mb-20 flex w-full flex-wrap items-center justify-center space-x-4 px-10 py-2">
          <div className="container mx-auto flex flex-col flex-wrap px-5 pt-12 pb-2">
            <div className="bg-slate-50 mx-auto mt-4 mb-20 flex w-full flex-wrap items-center justify-center space-x-4 px-10 py-2">
                <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white shadow md:inline-flex">1</span>
                <span className="hidden text-teal-500 md:inline">Accepted</span>
                <span className="hidden h-0.5 w-10 bg-teal-400 md:inline"></span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow">2</span>
                <span className="font-semibold text-blue-600">processing</span>
                <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 shadow md:inline-flex">3</span>
                <span className="hidden text-gray-600 md:inline">out for dlivery</span>
                <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 shadow md:inline-flex">4</span>
                <span className="hidden text-gray-600 md:inline">dilivered</span>
                <span className="text-xl md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </span>
            </div>
            </div>

          </div>
        </div>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Thanks for placing your order. Below is the order summary and tracking details.
        </p>
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div className="data">
              <p className="font-semibold text-base leading-7 text-black">
                Order Id: <span className="text-indigo-600 font-medium">#{orderData._id}</span>
              </p>
              <p className="font-semibold text-base leading-7 text-black mt-4">
                Order Date: <span className="text-gray-400 font-medium">{new Date(orderData.createdAt).toLocaleDateString()}</span>
              </p>
            </div>
            <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              Track Your Order
            </button>
          </div>

          <div className="w-full px-3 min-[400px]:px-6">
            {/* Crop Order Section */}
            {orderData.items.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                <div className="img-box max-lg:w-full">
                  <img src={item.image} alt="Crop image" className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover" />
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="flex items-center">
                      <div>
                        <h2 className="font-semibold text-xl leading-8 text-black mb-3">{item.name}</h2>
                        <p className="font-normal text-lg leading-8 text-gray-500 mb-3">By: {orderData.farmerId.name}</p>
                        <div className="flex items-center">
                          <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">Quantity: <span className="text-gray-500">{item.subtotal / item.price} kg</span></p>
                          <p className="font-medium text-base leading-7 text-black">Price: <span className="text-gray-500">${item.price}</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5">
                      <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">Order Status</p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-emerald-600">{orderData.status}</p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">Expected Delivery</p>
                          <p className="font-medium text-base leading-7 text-emerald-500">TBD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Payment Summary */}
            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                <button className="flex outline-0 py-6 sm:pr-6 sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                  <svg className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  Cancel Order
                </button>
                <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                  Paid using Credit Card <span className="text-gray-500">ending with 8822</span>
                </p>
              </div>
              <p className="font-semibold text-lg text-black py-6">
                Total Price: <span className="text-indigo-600">${orderData.totalPrice}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulkOrderSummary;
