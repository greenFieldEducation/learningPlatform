import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faBook, faCog, faCalendar } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Logo from '../../assets/logo.png';

const Sidebar = ({ scrollToSection }) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const navItems = [
    { name: 'Home', section: 'welcome', icon: <FontAwesomeIcon icon={faHome} /> },
    { name: 'Favorites', section: 'favorites', icon: <FontAwesomeIcon icon={faStar} /> },
    { name: 'Categories', section: 'categories', icon: <FontAwesomeIcon icon={faBook} /> },
    { name: 'Calendar', section: 'calendar', icon: <FontAwesomeIcon icon={faCalendar} /> },

  ];

  const settingsItem = {
    name: 'Settings',
    section: 'settings',
    icon: <FontAwesomeIcon icon={faCog} />,
  };

  return (
    <div className="sidebar fixed h-screen w-16 bg-blue-500 text-white flex flex-col items-center py-4">
      {/* Logo Placeholder (replace with your logo component) */}
      <div className="w-full mb-4 flex justify-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center space-y-4 mt-20">
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => {
              setActive(item.section);
              scrollToSection(item.section);
            }}
          >
            <div className={`p-2 rounded ${active === item.section ? 'bg-blue-700' : ''} hover:bg-blue-700`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Profile Picture and Settings */}
      <div className="mt-auto flex flex-col items-center space-y-4">
        {/* Profile Picture */}
        <a href="/student-dashboard/profile" onClick={() => setActive('profile')}>
          <img
            src="https://randomuser.me/api/portraits/women/8.jpg"
            className="w-10 h-10 rounded-full border-2 border-white"
            alt="Profile Picture"
          />
        </a>
        {/* Settings */}
        <div
          onClick={() => {
            setActive(settingsItem.section);
            scrollToSection(settingsItem.section);
          }}
        >
          <div className={`p-2 rounded ${active === settingsItem.section ? 'bg-blue-700' : ''} hover:bg-blue-700`}>
            {settingsItem.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
