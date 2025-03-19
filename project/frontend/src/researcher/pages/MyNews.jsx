import React, { useState, useEffect } from 'react';
import SidebarResearcher from '../components/SidebarResearcher';
import NewsForm from '../components/NewsForm';
import NewsCardR from '../components/NewsCardR';

export default function MyNews() {
  const [newss, setNewss] = useState([]); // Initialize as an empty array
  // const { user } = useAuthContext(); // Uncomment if you need user authentication

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/researcher/news', {
          // headers: {
          //   'Authorization': `Bearer ${user.token}` // Uncomment if you need authentication
          // }
        });
        const json = await response.json();

        if (response.ok) {
          setNewss(json); // Corrected typo: setWorkouts -> setNewss
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews(); // Call the function directly
  }, []); // Add `user` to the dependency array if you uncomment it

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <SidebarResearcher />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 mt-4">Publish Latest News</h1>

        {/* News Form */}
        <NewsForm />

        <div className="flex-1 p-8 ">
          <h1 className="text-2xl font-bold text-gray-800 -mb-16 mt-6">Your Published News</h1>
        </div>

        {/* News List */}
        <div className='mt-16'>
          {newss.map((news) => (
            <NewsCardR key={news._id} news={news} /> // Added return statement
          ))}
          
        </div>
      </div>
    </div>
  );
}