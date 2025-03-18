import React from 'react';
import SidebarResearcher from '../components/SidebarResearcher';
import RightSideBar from '../components/RightSideBar';
import NewsIcon from '../extras/news.png'; // Replace with your icon path
import GardenerIcon from '../extras/gardener.png'; // Replace with your icon path
import PestControlIcon from '../extras/pest-control.png'; // Replace with your icon path
import QuestionMarkIcon from '../extras/questionmark.png'; // Replace with your icon path

export default function HomeResearcher() {
  return (
    <div className="flex relative mt-0 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarResearcher />

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-7xl mx-auto pr-72"> {/* Add padding-right to account for the right sidebar */}
        {/* Welcome Text */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h1>
          <p className="text-gray-600">Let's make groundbreaking discoveries together!</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Latest News - Blue Theme */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src={NewsIcon} alt="News Icon" className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Latest News</h2>
            <p className="text-gray-500 mb-4">Publish updates on agriculture news, government policies, and farming innovations</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out">
              Create News
            </button>
          </div>

          {/* Card 2: Growing Guide - Green Theme */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src={GardenerIcon} alt="Gardener Icon" className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-green-800 mb-2">Growing Guide</h2>
            <p className="text-gray-500 mb-4">Share step-by-step guides on growing different crops</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-150 ease-in-out">
              Create Post
            </button>
          </div>

          {/* Card 3: Pest Control - Orange Theme */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-60">
            <img src={PestControlIcon} alt="Pest Control Icon" className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-orange-800 mb-2">Pest Control</h2>
            <p className="text-gray-500 mb-4">Preventing and treating plant pests and diseases</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-150 ease-in-out">
              Create Post
            </button>
          </div>
        </div>

        {/* Horizontal Card - Help Center */}
        <div className="bg-black rounded-lg shadow-md p-6 flex items-center justify-between w-3xl ">
          {/* Left Side: Icon and Text */}
          <div className="flex items-center">
            <img src={QuestionMarkIcon} alt="Help Center Icon" className="w-12 h-12 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Help Center</h2>
              <p className="text-gray-400">
                View and respond to farmers' questions on agriculture,<br/>crop management, pest control, and best farming practices.<br/> Share expert knowledge to help the community grow.
              </p>
            </div>
          </div>

          {/* Right Side: Button */}
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-150 ease-in-out">
            View Questions
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSideBar />
    </div>
  );
}