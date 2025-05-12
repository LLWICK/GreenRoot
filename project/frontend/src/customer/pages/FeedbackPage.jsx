import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/api/customer/feedback');
        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const data = await response.json();
        setFeedbacks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

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
            Feedback Page
          </h2>

          {loading && <p className="text-center text-gray-600">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && feedbacks.length === 0 && (
            <p className="text-center text-gray-500">No feedbacks available.</p>
          )}

          {!loading && !error && feedbacks.map((fb) => (
  <div key={fb._id} className="border-b py-4">
    <p className="text-green-600 text-sm font-semibold">Role: Customer</p>
    <p><strong>Feedback:</strong> {fb.feedback}</p>
    <p><strong>Has Issue:</strong> {fb.hasIssue}</p>
    {fb.hasIssue === 'yes' && (
      <p><strong>Complaint Type:</strong> {fb.complaintType}</p>
    )}
    {fb.ratings && (
      <div>
        <strong>Ratings:</strong>
        <ul className="ml-4 list-disc">
          {Object.entries(fb.ratings).map(([category, rating]) => (
            <li key={category}>{category}: {rating} ⭐</li>
          ))}
        </ul>
      </div>
    )}
    {fb.orderId && <p><strong>Order ID:</strong> {fb.orderId}</p>}
    <p className="text-sm text-gray-400">Created at: {new Date(fb.createdAt).toLocaleString()}</p>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
