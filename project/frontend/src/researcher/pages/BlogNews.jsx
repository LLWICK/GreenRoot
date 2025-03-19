import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import BlogHeader from '../components/BlogHeader';
import BlogFooter from '../components/BlogFooter';

export default function BlogNews() {
  const [newss, setNewss] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/researcher/news');
        const json = await response.json();

        if (response.ok) {
          setNewss(json);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {/* Blog Header */}
      <BlogHeader />

      {/* Heading Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Agriculture News, Government Policies, <br />
          Climate Changes, and Farming Innovations
        </h2>
      </div>

      {/* Loading Screen */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
        </div>
      ) : (
        /* News Cards Grid - Centered Horizontally */
        <div className="flex justify-center p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-7xl">
            {newss.length > 0 ? (
              newss.map((news) => (
                <NewsCard key={news._id} news={news} /> // Render each NewsCard
              ))
            ) : (
              <p className="text-gray-600 col-span-full text-center">No news available.</p>
            )}
          </div>
        </div>
      )}
      <BlogFooter/>
    </div>
  );
}