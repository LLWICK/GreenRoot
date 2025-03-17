import React from 'react';
import SidebarResearcher from '../components/SidebarResearcher';
import Logo from '../extras/Greenroots-logo-white.png';
import Background from '../extras/researcher-background.jpg';

export default function HomeResearcher() {
  return (
    <div
      className="flex relative mt-0 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }} // Set the background image
    >
      {/* Sidebar */}
      <SidebarResearcher />

      {/* Logo Container */}
      <div className="absolute top-4 left-64 -mt-10">
        {/* Adjust left-64 based on sidebar width */}
        <img src={Logo} alt="Logo" className="h-40" />
      </div>
    </div>
  );
}