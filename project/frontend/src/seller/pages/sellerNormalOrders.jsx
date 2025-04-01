import React from 'react';
import SideBar from '../components/sideBar(seller)';
import SalesBarChart from '../components/salesChart';
import NavBar from '@/admin/pages/home/home_components/NavBar';
import NavBar2 from '@/Common/NavBar2';
import { useParams } from 'react-router-dom';

function SellerNormalOrders() {
  const { sid } = useParams();

    const orders = {
        "orders": [
          {
            "orderID": "ORD12345",
            "status": "Processing",
            "placement_date": "2025-03-27T10:30:00.000Z",
            "ordinary_buyer_id": "NIRMAL001",
            "Retailer_ID": "RETAIL123",
            "Quantity": 10,
            "Address": "123 Green Street, Colombo, Sri Lanka",
            "payment": "Paid"
          },
          {
            "orderID": "ORD12346",
            "status": "Shipped",
            "placement_date": "2025-03-26T14:15:00.000Z",
            "ordinary_buyer_id": "NIRMAL001",
            "Retailer_ID": "RETAIL124",
            "Quantity": 5,
            "Address": "456 Blue Avenue, Kandy, Sri Lanka",
            "payment": "Pending"
          }
        ]
      }
      
      
  return (
    <div className="bg-gray-100">
      <nav className="p-4"><NavBar2/></nav>
      <div className="grid grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <SideBar sellerid={sid} />

        {/* Main Content */}
        <div className="col-span-10 flex flex-col p-6">
          <h1 className="text-xl font-semibold mb-4">Customer orders</h1>
          <div className="flex justify-end items-center gap-12 mb-10 mr-10">
            <a href="#" className="text-gray-700 hover:text-green-600">
              cat 1
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              cat 2
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              cat 3
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              cat 4
            </a>
          </div>

          <h1 className="text-l font-semibold mb-4">Pending orders</h1>

                   {/* Table */}
                   <div className="mx-0 w-full px-4 py-8 sm:px-8">
            <div className="overflow-y-hidden rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">Order ID</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Placement Date</th>
                      <th className="px-5 py-3">Ordinary Buyer ID</th>
                      <th className="px-5 py-3">Retailer ID</th>
                      <th className="px-5 py-3">Quantity</th>
                      <th className="px-5 py-3">Address</th>
                      <th className="px-5 py-3">Payment</th>
                      <th className="px-5 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    {orders.orders.map((order) => (
                      <tr key={order.orderID}>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.orderID}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.status}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{new Date(order.placement_date).toLocaleDateString()}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.ordinary_buyer_id}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.Retailer_ID || "N/A"}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.Quantity}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.Address}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.payment}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <div className="flex items-center space-x-1">
                            <button className="rounded bg-green-500 px-3 py-1 text-white">View</button>
                            <button className="rounded bg-red-500 px-3 py-1 text-white">Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
                <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of {orders.length} Entries </span>
                <div className="mt-2 inline-flex sm:mt-0">
                  <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                    Prev
                  </button>
                  <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>


          <h1 className="text-l font-semibold mb-4">out for dilivery orders</h1>

           {/* Table */}
           <div className="mx-0 w-full px-4 py-8 sm:px-8">
            <div className="overflow-y-hidden rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">Order ID</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Placement Date</th>
                      <th className="px-5 py-3">Ordinary Buyer ID</th>
                      <th className="px-5 py-3">Retailer ID</th>
                      <th className="px-5 py-3">Quantity</th>
                      <th className="px-5 py-3">Address</th>
                      <th className="px-5 py-3">Payment</th>
                      <th className="px-5 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    {orders.orders.map((order) => (
                      <tr key={order.orderID}>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.orderID}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.status}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{new Date(order.placement_date).toLocaleDateString()}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.ordinary_buyer_id}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.Retailer_ID || "N/A"}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.Quantity}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.Address}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">{order.payment}</p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <div className="flex items-center space-x-1">
                            <button className="rounded bg-green-500 px-3 py-1 text-white">View</button>
                            <button className="rounded bg-red-500 px-3 py-1 text-white">Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
                <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of {orders.length} Entries </span>
                <div className="mt-2 inline-flex sm:mt-0">
                  <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                    Prev
                  </button>
                  <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* End of Table */}
 
          
        </div>

        
      </div>
    </div>
  );
}

export default SellerNormalOrders;