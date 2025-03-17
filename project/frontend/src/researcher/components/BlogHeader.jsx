import React from 'react'
import Logo from '../extras/Greenroots-logo-color.png'

export default function BlogHeader() {
  return (
    <header className="bg-white h-20 flex items-center"> {/* Reduced header height */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo (aligned to the left) */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Green Roots Logo"
            className="ml-44 h-34 w-34" 
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold  py-2 px-4 rounded ">
            Home
          </a>
          <a href="/blog" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold  py-2 px-4 rounded">
            Blog
          </a>
          <a href="/how-to-grow" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold  py-2 px-4 rounded">
            How to Grow
          </a>
          <a href="/pest-and-disease" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold  py-2 px-4 rounded ">
            Pest and Disease
          </a>
          <a href="/qna" className="text-gray-700 hover:bg-amber-500 transition-colors font-bold  py-2 px-4 rounded ">
            Q&A
          </a>
        </nav>
      </div>
    </header>
  )
}
