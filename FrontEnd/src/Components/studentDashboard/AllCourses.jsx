import React, { useState } from 'react';
import DetailsPopUpModal from './DetailsPopUpModal.jsx';

const AllCourses = ({ courses }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to truncate text to a specified length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Determine which courses to display based on showAll state
  const coursesToDisplay = showAll ? courses : courses.slice(0, 3);

  // Handle click to show more details in modal
  const handleMoreClick = (course) => {
    setSelectedCourse(course);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesToDisplay.map((course) => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">
              {truncateText(course.description, 100)}
            </p>
            <button
              className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 transition duration-200"
              onClick={() => handleMoreClick(course)}
            >
              More
            </button>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 transition duration-200"
            onClick={() => setShowAll(true)}
          >
            See All
          </button>
        </div>
      )}
      {/* Modal to display course details */}
      <DetailsPopUpModal isOpen={!!selectedCourse} onClose={handleCloseModal} course={selectedCourse} />
    </div>
  );
};

export default AllCourses;
