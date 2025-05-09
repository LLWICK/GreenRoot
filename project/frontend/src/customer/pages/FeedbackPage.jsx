import React from 'react'
import Sidebar from '../components/Sidebar';

const FeedbackPage = () => {
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
            FeedbackPage
          </h2>
          <h3 className="text-xl font-medium text-green-700 mb-6 text-center">
            Product Order Quantity
          </h3>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage;
