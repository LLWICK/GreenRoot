import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; // Add this import

export default function SolutionForTicket({ ticketID }) {
  const [solutions, setSolutions] = useState([]); // Solutions for the ticket
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch solutions for the ticket
  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/researcher/solutions/ticket/${ticketID}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch solutions');
        }

        // Check if the response is an array (even if empty)
        if (!Array.isArray(data)) {
          throw new Error('Invalid solutions data');
        }

        setSolutions(data); // Set solutions data
      } catch (error) {
        console.error('Error fetching solutions:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchSolutions();
  }, [ticketID]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div  className='bg-green-100 '>
    
      {solutions.length > 0 ? (
        solutions.map((solution) => (
          <div key={solution._id} className="mb-4">
            {/* Solution Description */}
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">{solution.description}</p>
            </div>

            {/* Solution File (if any) */}
            {solution.file && (
              <img
                src={solution.file}
                alt="Solution"
                className="w-full h-32 object-cover rounded-lg mt-2"
              />
            )}

            {/* Solution Date */}
            <p className="text-xs text-gray-500 mt-2">
              Posted {formatDistanceToNow(new Date(solution.createdAt), { addSuffix: true })}
            </p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-600">No solutions provided yet.</p>
      )}
    </div>
  );
}