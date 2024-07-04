import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faBook, faCog } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const navItems = [
    { name: 'Home', path: '/student-dashboard', icon: <FontAwesomeIcon icon={faHome} /> },
    { name: 'Favorites', path: '/student-dashboard/favorites', icon: <FontAwesomeIcon icon={faStar} /> },
    { name: 'Categories', path: '/student-dashboard/categories', icon: <FontAwesomeIcon icon={faBook} /> },
  ];

  const settingsItem = {
    name: 'Settings',
    path: '/student-dashboard/settings',
    icon: <FontAwesomeIcon icon={faCog} />,
  };

  return (
    <div className="sidebar rounded h-screen w-16 bg-blue-500 text-white flex flex-col items-center py-4 space-y-4">
      {navItems.map(item => (
        <Link to={item.path} key={item.name} onClick={() => setActive(item.path)}>
          <div className={`p-2 rounded ${active === item.path ? 'bg-blue-500' : ''} hover:bg-blue-700`}>
            {item.icon}
          </div>
        </Link>
      ))}
      {/* Render Settings item outside the map */}
      <Link to={settingsItem.path} key={settingsItem.name} onClick={() => setActive(settingsItem.path)}>
        <div className={`p-2 rounded ${active === settingsItem.path ? 'bg-blue-700' : ''} hover:bg-blue-700`}>
          {settingsItem.icon}
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
