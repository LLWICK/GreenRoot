import React from 'react';
import SidebarResearcher from '../components/SidebarResearcher';
import Logo from '../extras/Greenroots-logo-color.png';

export default function HomeResearcher() {
  return (
    <div className="flex relative mt-0">
      {/* Sidebar */}
      <SidebarResearcher />

      {/* Logo Container */}
      <div className="absolute top-4 left-64 mt-4"> {/* Adjust left-64 based on sidebar width */}
        <img src={Logo} alt="Logo" className="h-40" />
      </div>
    </div>
  );
}
