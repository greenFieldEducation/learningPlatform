import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDna, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import icons

const MyCourses = ({ myCourses }) => {
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

  return (
    <div className='p-4'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myCourses.map((course) => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className={`course-card-header flex items-center px-4 py-3 bg-blue-500 text-white`}>
              <FontAwesomeIcon icon={getStatusIcon(course.status)} className="mr-2" />
              <h3 className="text-lg font-semibold">{course.courseTitle}</h3>
            </div>
            <div className="px-4 py-3">
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
