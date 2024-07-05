import React, { useState } from 'react';
import DetailsPopUpModal from "./DetailsPopUpModal.jsx"

const dummyAllCourses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming concepts and languages. This course covers variables, loops, and functions.',
    instructor: 'John Doe',
    rating: 4.5,
    startDate: '2024-08-01',
  },
  {
    id: 2,
    title: 'Creative Writing',
    description: 'Explore different writing styles and techniques to develop your creative voice. Learn to craft compelling stories and poems.',
    instructor: 'Jane Smith',
    rating: 4.7,
    startDate: '2024-09-15',
  },
  {
    id: 3,
    title: 'Macroeconomics',
    description: 'Gain insights into economic growth, inflation, unemployment, and government policies. Understand macroeconomic indicators and models.',
    instructor: 'Alice Johnson',
    rating: 4.3,
    startDate: '2024-07-20',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Learn how to create, implement, and manage successful digital marketing campaigns. Topics include SEO, social media marketing, and email marketing.',
    instructor: 'Michael Brown',
    rating: 4.8,
    startDate: '2024-08-10',
  },
  {
    id: 5,
    title: 'Introduction to Psychology',
    description: 'Understand the basics of human behavior and mental processes. Topics include cognitive, social, and developmental psychology.',
    instructor: 'Emily Davis',
    rating: 4.6,
    startDate: '2024-09-01',
  },
  {
    id: 6,
    title: 'Graphic Design',
    description: 'Learn the principles of design and how to create visually appealing graphics. This course covers typography, color theory, and layout design.',
    instructor: 'Robert Wilson',
    rating: 4.9,
    startDate: '2024-10-05',
  },
];

const AllCourses = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesToDisplay = showAll ? dummyAllCourses : dummyAllCourses.slice(0, 3);

  const handleMoreClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
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
      <DetailsPopUpModal isOpen={!!selectedCourse} onClose={handleCloseModal} course={selectedCourse} />
    </div>
  );
};

export default AllCourses;
