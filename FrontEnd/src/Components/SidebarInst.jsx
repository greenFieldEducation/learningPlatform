import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaHome, FaPlus, FaEdit, FaBell, FaSignOutAlt } from 'react-icons/fa';

const SidebarInst = ({ scrollToSection, handleEditProfile, handleLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Add Course', path: '/add-course', icon: <FaPlus /> },
    { name: 'Edit Profile', action: handleEditProfile, icon: <FaEdit /> },
    { name: 'Notifications', path: '#', icon: <FaBell /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-16 bg-blue-500 text-white p-6">
        {/* Logo Placeholder */}
        <div className="w-full mb-4 flex justify-center">
          <img src="" alt="Logo" className="w-10 h-10" />
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col items-center space-y-4 mt-20">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
                if (item.action) {
                  item.action();
                }
                setActive(item.path || item.name);
              }}
              className={`my-4 text-2xl cursor-pointer hover:text-blue-300 ${active === item.path ? 'text-blue-300' : ''}`}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Profile Picture and Logout */}
        <div className="mt-auto flex flex-col items-center space-y-4">
          <Link to="/student-dashboard/profile" onClick={() => setActive('profile')}>
            <img
              src="https://randomuser.me/api/portraits/women/8.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Profile Picture"
            />
          </Link>
          <div
            onClick={handleLogout}
          >
            <div className="p-2 rounded hover:bg-blue-700">
              <FaSignOutAlt className="text-2xl cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarInst;
