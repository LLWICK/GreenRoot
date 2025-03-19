import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
//import { useAuthContext } from '../hook/useAuthContext';

export default function NewsCardR({ news }) {
  //const { user } = useAuthContext();

  const handleClick = async () => {
    // if (!user) {
    //   return;
    // }

    const response = await fetch('http://localhost:3000/api/researcher/news/' + news._id, {
      method: 'DELETE',
      // headers: {
      //   'Authorization': `Bearer ${user.token}`,
      // },
    });

    const json = await response.json();
  };

  return (
     <tr className="bg-white border-b hover:bg-gray-200 transition duration-200">
      {/* Image Column */}
      <td className="p-4 align-middle">
        <img
          src={`http://localhost:3000/${news.file}`}
          alt="news"
          className="w-24 h-24 object-cover rounded-lg mx-auto shadow-md hover:shadow-lg transition duration-200"
        />
      </td>

      {/* Title Column */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-middle">
        {news.title}
      </td>

      {/* Date Column */}
      <td className="px-6 py-4 text-gray-500 align-middle">
        {formatDistanceToNow(new Date(news.createdAt), { addSuffix: true })}
      </td>

      {/* Actions Column */}
      <td className="px-6 py-4 align-middle">
        <div className="flex items-center justify-center space-x-4">
          {/* Update Button */}
          <Link to="/update" state={{ news }}>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-200 shadow-md hover:shadow-lg">
              Update
            </button>
          </Link>

          {/* Delete Button */}
          <button
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition duration-200 shadow-md hover:shadow-lg"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}