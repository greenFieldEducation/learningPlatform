import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faBook, faCog, faCalendar } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Logo from '../../assets/logo.png';

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const navItems = [
    { name: 'Home', path: '/student-dashboard', icon: <FontAwesomeIcon icon={faHome} /> },
    { name: 'Favorites', path: '/student-dashboard/favorites', icon: <FontAwesomeIcon icon={faStar} /> },
    { name: 'Categories', path: '/student-dashboard/categories', icon: <FontAwesomeIcon icon={faBook} /> },
    { name: 'Calendar', path: '/student-dashboard/calendar', icon: <FontAwesomeIcon icon={faCalendar} /> },
  ];

  const settingsItem = {
    name: 'Settings',
    path: '/student-dashboard/settings',
    icon: <FontAwesomeIcon icon={faCog} />,
  };

  return (
    <div className="sidebar rounded h-screen w-16 bg-blue-500 text-white flex flex-col items-center py-4">
      {/* Logo Placeholder (replace with your logo component) */}
      <div className="w-full mb-4 flex justify-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center space-y-4 mt-12"> {/* Added margin-top for spacing */}
        {navItems.map((item) => (
          <Link to={item.path} key={item.name} onClick={() => setActive(item.path)}>
            <div className={`p-2 rounded ${active === item.path ? 'bg-blue-700' : ''} hover:bg-blue-700`}>
              {item.icon}
            </div>
          </Link>
        ))}
      </div>

      {/* Profile Picture and Settings */}
      <div className="mt-auto flex flex-col items-center space-y-4">
        {/* Profile Picture */}
        <Link to="/student-dashboard/profile" onClick={() => setActive('/student-dashboard/profile')}>
          <img
            src="https://randomuser.me/api/portraits/women/8.jpg"
            className="w-10 h-10 rounded-full border-2 border-white"
            alt="Profile Picture"
          />
        </Link>
        {/* Settings */}
        <Link to={settingsItem.path} onClick={() => setActive(settingsItem.path)}>
          <div className={`p-2 rounded ${active === settingsItem.path ? 'bg-blue-700' : ''} hover:bg-blue-700`}>
            {settingsItem.icon}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
