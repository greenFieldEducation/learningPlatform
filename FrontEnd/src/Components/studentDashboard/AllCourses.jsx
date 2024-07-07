import React, { useState } from 'react';

const AllCourses = ({ courses, onCourseSelect }) => {
  const [showAll, setShowAll] = useState(false);

  // Function to truncate text to a specified length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Determine which courses to display based on showAll state
  const coursesToDisplay = showAll ? courses : courses.slice(0, 3);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesToDisplay.map((course) => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{truncateText(course.description, 100)}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-200"
              onClick={() => onCourseSelect(course)}
            >
              More
            </button>
          </div>
        ))}
      </div>
      {!showAll && courses.length > 3 && (
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700 transition duration-200"
          onClick={() => setShowAll(true)}
        >
          See All
        </button>
      )}
    </div>
  );
};

export default AllCourses;
