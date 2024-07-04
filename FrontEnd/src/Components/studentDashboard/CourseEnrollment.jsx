import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faGlobe, faChartLine, faDna, faBook, faPalette } from '@fortawesome/free-solid-svg-icons'; // Import icons

// Dummy data adjusted to match the Course schema with instructor information
const dummyCourses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming concepts and languages.',
    category: 'Math',
    content: 'This course covers variables, data types, control flow, functions, and object-oriented programming basics.',
    instructorName: 'John Doe',
    instructorImage: 'https://randomuser.me/api/portraits/men/1.jpg', // Sample instructor image URL
  },
  {
    id: 2,
    title: 'Creative Writing',
    description: 'Explore different writing styles and techniques to develop your creative voice.',
    category: 'Art&Literature',
    content: 'Learn about character development, plot structure, and storytelling through various writing exercises.',
    instructorName: 'Jane Smith',
    instructorImage: 'https://randomuser.me/api/portraits/women/2.jpg', // Sample instructor image URL
  },
  {
    id: 3,
    title: 'Macroeconomics',
    description: 'Gain insights into economic growth, inflation, unemployment, and government policies.',
    category: 'Economy',
    content: 'Explore economic theories, models, and real-world applications to understand macroeconomic trends.',
    instructorName: 'Michael Johnson',
    instructorImage: 'https://randomuser.me/api/portraits/men/3.jpg', // Sample instructor image URL
  },
  {
    id: 4,
    title: 'World History: From Ancient Civilizations to Modern Times',
    description: 'Journey through major historical events and civilizations across the globe.',
    category: 'History&Geography',
    content: 'Learn about empires, revolutions, cultural exchange, and significant historical figures.',
    instructorName: 'Emily Davis',
    instructorImage: 'https://randomuser.me/api/portraits/women/4.jpg', // Sample instructor image URL
  },
  {
    id: 5,
    title: 'Biology Fundamentals',
    description: 'Explore the basic principles of life, cell structure, genetics, and evolution.',
    category: 'Science',
    content: 'This course covers essential biological concepts including biochemistry, cell biology, and organism diversity.',
    instructorName: 'Christopher Brown',
    instructorImage: 'https://randomuser.me/api/portraits/men/5.jpg', // Sample instructor image URL
  },
  {
    id: 6,
    title: 'Marketing Essentials',
    description: 'Learn about marketing strategies, consumer behavior, and effective promotion techniques.',
    category: 'Business', // Adjusted category for a course not in the original enum
    content: 'Explore market research, branding, product positioning, and digital marketing tools.',
    instructorName: 'Jessica Taylor',
    instructorImage: 'https://randomuser.me/api/portraits/women/6.jpg', // Sample instructor image URL
  },
  {
    id: 7,
    title: 'Calculus for Beginners',
    description: 'Master the foundational concepts of differential and integral calculus.',
    category: 'Math',
    content: 'This course covers limits, derivatives, integrals, applications of calculus in solving real-world problems.',
    instructorName: 'Daniel Wilson',
    instructorImage: 'https://randomuser.me/api/portraits/men/7.jpg', // Sample instructor image URL
  },
  {
    id: 8,
    title: 'Introduction to Philosophy',
    description: 'Explore key philosophical questions, theories, and thinkers throughout history.',
    category: 'Humanities', // Adjusted category for a course not in the original enum
    content: 'Learn about ethics, logic, epistemology, and existentialism through engaging discussions and readings.',
    instructorName: 'Sophia Miller',
    instructorImage: 'https://randomuser.me/api/portraits/women/8.jpg', // Sample instructor image URL
  },
];

const categories = [
  'all',
  'Math',
  'Economy',
  'Science',
  'History&Geography',
  'Art&Literature',
];

const CourseEnrollment = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); // Initial active tab
  const tabRefs = useRef({});

  useEffect(() => {
    setCourses(dummyCourses);
  }, []);

  useEffect(() => {
    // Set up references to each tab button
    categories.forEach(category => {
      tabRefs.current[category] = React.createRef();
    });
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Math':
        return faCalculator;
      case 'Economy':
        return faChartLine;
      case 'Science':
        return faDna;
      case 'History&Geography':
        return faGlobe;
      case 'Art&Literature':
        return faBook;
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

  const handleTabClick = (category) => {
    setActiveTab(category);
    scrollToActiveTab(category);
  };

  const scrollToActiveTab = (category) => {
    const tabRef = tabRefs.current[category];
    if (tabRef && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className='p-4'>
      <div className="flex flex-wrap mb-4">
        {categories.map((category) => (
          <button
            key={category}
            ref={tabRefs.current[category]}
            className={`px-4 py-2 mr-2 rounded-lg text-gray-600 font-medium ${
              activeTab === category
                ? 'bg-indigo-500 text-white'
                : 'hover:bg-gray-200 focus:outline-none focus:bg-gray-100'
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category === 'all' ? 'All Courses' : category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCoursesByCategory(activeTab).map((course) => (
          <div key={course.id} className="course-card bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="course-card-header flex items-center px-4 py-3 bg-indigo-500 text-white">
              <FontAwesomeIcon icon={getCategoryIcon(course.category)} className="mr-2" />
              <h3 className="text-lg font-semibold">{course.title}</h3>
            </div>
            <div className="course-card-body px-4 py-3">
              <div className="flex items-center">
                <img src={course.instructorImage} alt={course.instructorName} className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm"> {course.instructorName}</span>
              </div>
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
