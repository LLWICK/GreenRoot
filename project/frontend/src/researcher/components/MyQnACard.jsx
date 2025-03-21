import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function MyQnACard({ ticket }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Ticket Image */}
      {ticket.image && (
        <img
          src={ticket.image}
          alt="Ticket"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      {/* Ticket Subject */}
      <h4 className="text-xl font-bold text-gray-800 mb-2">{ticket.subject}</h4>

      {/* Ticket Date */}
      <p className="text-sm text-gray-500">
        {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
      </p>

      {/* Ticket Description */}
      <p className="text-sm text-gray-600 mt-2">{ticket.description}</p>
    </div>
  );
}