import React, { useEffect, useState } from 'react'
import GrowingGuideForm from '../components/GrowingGuideForm'
import SidebarResearcher from '../components/SidebarResearcher'
import MyGrowingguideCard from '../components/MyGrowingguideCard'

export default function MyGrowingGuide() {
    const [posts, setPosts] = useState([])
    const [showForm, setShowForm] = useState(false) // State to control form visibility

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/researcher/posts');
            const json = await response.json();
    
            if (response.ok) {
              setPosts(json);
            }
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchPosts();
      }, []);

  return (
    <div className='bg-gray-200'>
       <div>
         <SidebarResearcher/>
       </div>
        
      {/* Main Content */}
      <div className="flex-1 p-8 ml-66">
        {/* Add New Post Button */}
        <div className="mb-6 mt-10">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {showForm ? 'Cancel' : '+ Create New Growing Guide'}
          </button>
        </div>

        {/* Conditionally render the form */}
        {showForm && <GrowingGuideForm />}

        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-800 -mb-16 mt-6">Your Published Posts</h1>
        </div>

        {/* Posts List */}
        <div className='mt-16 w-5xl gap-4 p-4'>
          {posts.map((post) => (
            <MyGrowingguideCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}