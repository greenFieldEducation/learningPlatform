import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDna, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import icons

// Dummy data adjusted to match the Course schema with instructor information
const dummyCourses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    category: 'Math',
    status: 'Accepted',
  },
  {
    id: 2,
    title: 'Creative Writing',
    category: 'Art&Literature',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Macroeconomics',
    category: 'Economy',
    status: 'Rejected',
  },
  // Add more dummy courses with different statuses as needed
];

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState('All'); // Initial active tab
  const tabRefs = useRef({});

  useEffect(() => {
    setCourses(dummyCourses);
  }, []);

  useEffect(() => {
    // Set up references to each tab button
    const uniqueStatus = ['All', ...new Set(courses.map(course => course.status))];
    uniqueStatus.forEach(status => {
      tabRefs.current[status] = React.createRef();
    });
  }, [courses]); // Courses added as a dependency

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Accepted':
        return faChartLine;
      case 'Pending':
        return faDna;
      case 'Rejected':
        return faGlobe;
      default:
        return null; // Default icon for other statuses
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500'; // Default color for other statuses
    }
  };

  const filterCoursesByStatus = (status) => {
    if (status === 'All') {
      return courses;
    }
    return courses.filter((course) => course.status === status);
  };

  const handleTabClick = (status) => {
    setActiveTab(status);
    scrollToActiveTab(status);
  };

  const scrollToActiveTab = (status) => {
    const tabRef = tabRefs.current[status];
    if (tabRef && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className='p-4'>
      <div className="flex flex-wrap mb-4">
        {['All', ...new Set(courses.map(course => course.status))].map((status) => (
          <button
            key={status}
            ref={tabRefs.current[status]}
            className={`px-4 py-2 mr-2 rounded-lg text-gray-600 font-medium ${
              activeTab === status
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-200 focus:outline-none focus:bg-gray-100'
            }`}
            onClick={() => handleTabClick(status)}
          >
            {status === 'All' ? 'All Courses' : status}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCoursesByStatus(activeTab).map((course) => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className={`course-card-header flex items-center px-4 py-3 bg-blue-500 text-white`}>
              <FontAwesomeIcon icon={getStatusIcon(course.status)} className="mr-2" />
              <h3 className="text-lg font-semibold">{course.title}</h3>
            </div>
            <div className="px-4 py-3">
              <p className="text-gray-700">Category: {course.category}</p>
              <div className="mt-2">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getStatusColor(course.status)} text-white`}>
                  {course.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
