import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "home", link: "/admin/dashboard" },
    { name: "Users", icon: "user", link: "/admin/user-management" },
    { name: "Files", icon: "folder", link: "/admin/files" },
    { name: "Calendar", icon: "calendar", link: "/admin/calendar" },
    { name: "Reports", icon: "chart-bar", link: "/admin/reports" },
    { name: "Settings", icon: "cog", link: "/admin/settings" },
  ];

  return (
    <aside className={`h-screen bg-white border-r border-gray-200 fixed left-0 top-0 ${isOpen ? "w-56" : "w-20"} transition-all duration-300`}>
      {/* Toggle Button */}
      <div className="p-4 flex justify-end">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center mt-4 space-y-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center w-full p-3 hover:bg-gray-100 rounded-lg text-gray-600"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {isOpen && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="mt-auto p-4">
        <button className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
