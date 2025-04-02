import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../extras/Greenroots-logo-color.png';

export default function BlogHeader() {
  return (
    <header className="bg-gray-200 h-20 flex items-center"> {/* Reduced header height */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo (aligned to the left) */}
        <div className="flex items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="Green Roots Logo"
            className="ml-44 h-34 w-34" 
          /> </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/blog" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold py-2 px-4 rounded">
            Home
          </Link>

          <Link to="/blog/news" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold py-2 px-4 rounded">
            News
          </Link>

          <Link to="/blog/growing-guide" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold py-2 px-4 rounded">
            Growing Guide
          </Link>

          <Link to="/blog/pest-and-disease" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold py-2 px-4 rounded">
            Pest and Disease
          </Link>

          <Link to="/blog/qna" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold py-2 px-4 rounded">
            Q&A
          </Link>
        </nav>
      </div>
    </header>
  );
}