import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  MessageSquare,
  Calendar,
  List,
  Layers,
  Users,
} from "lucide-react"; // Importing icons

function Sidebar() {
  return (
    <div className="bg-white h-screen md:block shadow-xl px-3 md:w-60 lg:w-60 overflow-y-auto">
      <div className="space-y-6 md:space-y-10 mt-10">
        <h1 className="font-bold text-xl text-center">
          <span className="text-teal-600"></span>
        </h1>
        <div id="profile" className="space-y-3">
          <div>
            <h2 className="font-medium text-sm text-center text-teal-500">
              Eduard Pantazi
            </h2>
            <p className="text-xs text-gray-500 text-center">Administrator</p>
          </div>
        </div>
        <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
          <input
            type="text"
            className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
            placeholder="Search"
          />
          <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
            {/* Search Icon (You can add an icon here) */}
          </button>
        </div>
        <div id="menu" className="flex flex-col space-y-2">
          <Link
            to="/Customer/Dashboard" // Add link to the dashboard
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/user/Crops" // Add link to crops page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <Package className="w-4 h-4 mr-2" />
            <span>Products</span>
          </Link>
          <Link
            to="/Customer/Orderhistory" // Add link to orders page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span>Order history</span>
          </Link>
          <Link
            to="/Customer/ChartPage" // Add link to chat page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Chart</span>
          </Link>
          <Link
            to="/user/Calendar" // Add link to calendar page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Calendar</span>
          </Link>
          <Link
            to="/user/Table" // Add link to table page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <List className="w-4 h-4 mr-2" />
            <span>Table</span>
          </Link>
          <Link
            to="/user/UIComponents" // Add link to UI Components page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <Layers className="w-4 h-4 mr-2" />
            <span>UI Components</span>
          </Link>
          <Link
            to="/user/Users" // Add link to users page
            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
          >
            <Users className="w-4 h-4 mr-2" />
            <span>Users</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;