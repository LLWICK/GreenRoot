import React from 'react';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import Header from '../components/Header';
import Footer from '@/admin/pages/home/home_components/Footer';

const DashboardPage = () => {
    return (
        <div className="flex h-screen"> {/* Use flexbox for layout */}
            <Sidebar /> {/* Render the Sidebar component */}
            <div className="flex-1 p-4"> {/* Main content area */}
                {/* Your dashboard content goes here */}
                <h1>Dashboard Content</h1>
                <p>Welcome to your dashboard!</p>
                <Header/>  
                <Footer/>
            </div>
        </div>
    );
};

export default DashboardPage;