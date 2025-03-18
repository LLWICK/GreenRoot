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
    <tr className="bg-white border-b hover:bg-gray-50">
      {/* Image Column */}
      <td className="p-4 align-middle"> {/* Vertically centered */}
        <img
          src={`http://localhost:3000/${news.file}`}
          alt="news"
          className="w-24 h-24 object-cover rounded-lg mx-auto"
        />
      </td>

      {/* Title Column */}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-middle"> {/* Vertically centered */}
        {news.title}
      </td>

      {/* Date Column */}
      <td className="px-6 py-4 text-gray-500 align-middle"> {/* Vertically centered */}
        {formatDistanceToNow(new Date(news.createdAt), { addSuffix: true })}
      </td>

      {/* Actions Column */}
      <td className="px-6 py-4 align-middle"> {/* Vertically centered */}
        <div className="flex items-center justify-center space-x-4">
          {/* Update Button */}
          <Link to="/update" state={{ news }}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Update
            </button>
          </Link>

          {/* Delete Button */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}