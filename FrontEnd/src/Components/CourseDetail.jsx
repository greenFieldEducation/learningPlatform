import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dummy data for courses
const courses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming with this introductory course. This course covers fundamental concepts and helps you build a strong foundation in programming.',
    category: 'Science',
    content: 'This course covers basic programming principles such as variables, loops, and functions.',
    note: 'No prior programming experience required.',
    duration: '6 weeks',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/programming.jpg'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Master the intricacies of JavaScript and become a pro. This course dives deep into advanced topics and best practices.',
    category: 'Science',
    content: 'In-depth study of JavaScript concepts like closures, async programming, and modern ES6+ features.',
    note: 'Prerequisite: Basic knowledge of JavaScript.',
    duration: '8 weeks',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/javascript.jpg'
  },
  {
    id: 3,
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer with our comprehensive bootcamp. This course covers everything from HTML and CSS to backend development and deployment.',
    category: 'Science',
    content: 'Learn front-end development with HTML, CSS, JavaScript frameworks, and back-end development with Node.js, Express, and databases.',
    note: 'Intensive hands-on coding projects throughout the course.',
    duration: '12 weeks',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/web-development.jpg'
  },
  {
    id: 4,
    title: 'Data Science with Python',
    description: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
    category: 'Science',
    content: 'Covering data analysis, data visualization, machine learning algorithms, and real-world data science projects.',
    note: 'Basic knowledge of Python recommended.',
    duration: '10 weeks',
    imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(course => course.id === parseInt(id));

  // Random colors for title to make it more alive
  const titleColors = [
    'text-blue-600',
    'text-green-600',
    'text-yellow-600',
    'text-indigo-600',
    'text-pink-600',
    'text-purple-600',
    'text-red-600',
    'text-teal-600',
  ];
  const randomColor = titleColors[Math.floor(Math.random() * titleColors.length)];

  const goBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        {course ? (
          <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className={`text-4xl font-bold mb-4 ${randomColor}`}>{course.title}</h1>
              <p className="text-gray-700 text-lg mb-6">{course.description}</p>
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 mr-2 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">{course.duration}</p>
              </div>
              <p className="text-gray-700 text-lg">{course.content}</p>
              {course.note && <p className="text-gray-700 mt-2">Note: {course.note}</p>}
            </div>
            <div className="p-6 bg-gray-200 text-center">
              <button
                onClick={goBackToHome}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700">Course not found.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
