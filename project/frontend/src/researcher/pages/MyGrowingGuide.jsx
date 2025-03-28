import React, { useEffect, useState } from 'react'
import GrowingGuideForm from '../components/GrowingGuideForm'
import SidebarResearcher from '../components/SidebarResearcher'
import MyGrowingguideCard from '../components/MyGrowingguideCard'

export default function MyGrowingGuide() {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/researcher/posts', {
              // headers: {
              //   'Authorization': `Bearer ${user.token}` // Uncomment if you need authentication
              // }
            });
            const json = await response.json();
    
            if (response.ok) {
              setPosts(json); // Corrected typo: setWorkouts -> setNewss
            }
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchPosts(); // Call the function directly
      }, []); // Add `user` to the dependency array if you uncomment it

  return (
    <div className='bg-gray-200 '>
       
       <div>
       <SidebarResearcher/>
       </div>
        
        {/* Main Content */}
      <div className="flex-1 p-8 ml-66 ">
       
        <GrowingGuideForm/>

        <div className="flex-1 p-8 ">
          <h1 className="text-2xl font-bold text-gray-800 -mb-16 mt-6">Your Published Posts</h1>
        </div>

      {/* News List */}
      <div className='mt-16  w-5xl gap-4 p-4'>
          {posts.map((post) => (
            <MyGrowingguideCard key={post._id} post={post} /> // Added return statement
          ))}
                    
        </div>
      </div>

     
    </div>
  )
}
