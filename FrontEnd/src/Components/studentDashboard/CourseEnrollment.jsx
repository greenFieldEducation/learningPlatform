// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalculator, faGlobe, faChartLine, faDna, faBook, faPalette } from '@fortawesome/free-solid-svg-icons'; // Import icons

// const dummyCourses = [
//   {
//     id: 1,
//     title: 'Introduction to Mathematics',
//     description: 'Basic principles of mathematics.',
//     category: 'Math',
//     content: 'This course covers arithmetic, algebra, and geometry fundamentals.',
//   },
//   {
//     id: 2,
//     title: 'Economic Theories',
//     description: 'Key concepts in economic theory.',
//     category: 'Economy',
//     content: 'Explore supply and demand, market structures, and economic policies.',
//   },
//   // ... other courses
//   {
//     id: 6,
//     title: 'Literature Appreciation',
//     description: 'Exploring famous literary works and authors.',
//     category: 'Art&Literature',
//     content: 'Read and analyze classic and modern literature.',
//   },
// ];

// const CourseEnrollment = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Simulate fetching courses from backend API
//     setCourses(dummyCourses);
//   }, []);

//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case 'Math':
//         return faCalculator;
//       case 'Economy':
//         return faChartLine;
//       case 'Science':
//         return faDna; // Assuming 'dnaIcon' is imported for Science
//       case 'History&Geography':
//         return faGlobe;
//       case 'Art&Literature':
//         return faBook; // Assuming 'bookOpenIcon' is imported for Art&Literature
//       default:
//         return faPalette; // Default icon for other categories
//     }
//   };

//   return (
//     <div className="mt-8 max-w-5xl ">
//       <h2 className="text-3xl font-bold text-blue-600 mb-6">Course Enrollment</h2>  {/* Use primary for headings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.map((course) => (
//           <div key={course.id} className="course-card bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="course-card-header flex items-center px-4 py-3 bg-indigo-500 text-white">  {/* Use primary for headers */}
//               <FontAwesomeIcon icon={getCategoryIcon(course.category)} className="mr-2" />
//               <h3 className="text-lg font-semibold">{course.title}</h3>
//             </div>
//             <div className="course-card-body px-4 py-3">
//               <p className="text-gray-700">{course.description}</p>
//               <button className="mt-2 px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900 transition duration-200">Enroll</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );}

// export default CourseEnrollment;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faGlobe, faChartLine, faDna, faBook, faPalette } from '@fortawesome/free-solid-svg-icons'; // Import icons
const dummyCourses = [
      {
        id: 1,
        title: 'Introduction to Mathematics',
        description: 'Basic principles of mathematics.',
        category: 'Math',
        content: 'This course covers arithmetic, algebra, and geometry fundamentals.',
      },
      {
        id: 2,
        title: 'Economic Theories',
        description: 'Key concepts in economic theory.',
        category: 'Economy',
        content: 'Explore supply and demand, market structures, and economic policies.',
      },
      // ... other courses
      {
        id: 6,
        title: 'Literature Appreciation',
        description: 'Exploring famous literary works and authors.',
        category: 'Art&Literature',
        content: 'Read and analyze classic and modern literature.',
      },
    ];
const categories = [
  'all',
  'Math',
  'Economy',
  'Science',
  'History&Geography',
  'Art&Literature',
]; // All course categories

const CourseEnrollment = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); // Initial active tab

  useEffect(() => {
    setCourses(dummyCourses);
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Math':
        return faCalculator;
      case 'Economy':
        return faChartLine;
      case 'Science':
        return faDna; // Assuming 'dnaIcon' is imported for Science
      case 'History&Geography':
        return faGlobe;
      case 'Art&Literature':
        return faBook; // Assuming 'bookOpenIcon' is imported for Art&Literature
      default:
        return faPalette; // Default icon for other categories
    }
  };

  const filterCoursesByCategory = (category) => {
    if (category === 'all') {
      return courses;
    }
    return courses.filter((course) => course.category === category);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Course Enrollment</h2>
      <div className="flex flex-wrap mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mr-2 rounded-lg text-gray-700 font-medium ${
              activeTab === category
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                : 'hover:bg-gray-200 focus:outline-none focus:bg-gray-300'
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category === 'all' ? 'All Courses' : category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCoursesByCategory(activeTab).map((course) => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="course-card-header flex items-center px-4 py-3 bg-indigo-500 text-white">
              <FontAwesomeIcon icon={getCategoryIcon(course.category)} className="mr-2" />
              <h3 className="text-lg font-semibold">{course.title}</h3>
            </div>
            <div className="course-card-body px-4 py-3">
              <p className="text-gray-700">{course.description}</p>
              <button className="mt-2 px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:bg-indigo-900 transition duration-200">Enroll</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseEnrollment;
