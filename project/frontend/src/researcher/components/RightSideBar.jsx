import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling for the calendar
import ResearcherProfilePic from "../extras/researcherprofilepic.jpg"; // Adjust the path as needed

export default function RightSidebar() {
  return (
    <div className="fixed right-0 top-0 w-72 h-screen overflow-y-auto bg-white shadow-xl">
      <div className="font-poppins antialiased h-full flex flex-col">
        <div className="px-4 py-6 flex-1">
          {/* Profile Text */}
          <div className="mb-8">
            <h2 className="text-gray-800 text-xl font-bold">Profile</h2>
          </div>

          {/* Profile Section */}
          <div className="text-center mb-8">
            <img
              src={ResearcherProfilePic}
              alt="Researcher Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-gray-800 text-lg font-semibold">Melissa Anderson</h2>
            <p className="text-gray-600 text-sm">melanderson@gmail.com</p>
          </div>

          {/* Real-Time Calendar */}
          <div>
            <h3 className="text-gray-800 text-md font-semibold mb-4">Calendar</h3>
            <Calendar
              className="react-calendar bg-gray-100 border-none text-gray-800 rounded-lg"
              tileClassName="text-gray-800 hover:bg-gray-200 hover:text-gray-900 rounded-md transition duration-150 ease-in-out"
            />
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-6 border-t border-gray-200">
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150 ease-in-out">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}