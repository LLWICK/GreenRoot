import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function MyQnACard({ ticket }) {
  const navigate = useNavigate();

  // Handle Card Click
  const handleCardClick = (ticketId) => {
    console.log('Navigating to ticket:', ticketId);
    navigate(`/researcher/my-qna/reply/${ticketId}`); // Navigate to the details page
  };

  return (
    <div 
      className="w-full flex items-start space-x-4 p-4 hover:bg-gray-300 rounded-lg transition-colors cursor-pointer"
      onClick={() => handleCardClick(ticket._id)}
    >
      {/* User Avatar (Placeholder) */}
      <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
        <span className="text-sm font-semibold text-gray-700">F</span>
      </div>

      {/* Ticket Content */}
      <div className="flex-1">
        {/* Ticket Subject and Date */}
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-800">{ticket.subject}</h4>
        </div>

        {/* Posted Time */}
        <p className="text-xs text-gray-500">
          {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}