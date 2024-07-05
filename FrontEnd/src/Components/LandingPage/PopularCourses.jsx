import React from 'react';
import { NavLink } from 'react-router-dom';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      details: 'Learn the basics of programming with this introductory course. This course covers fundamental concepts and helps you build a strong foundation in programming.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/programming.jpg'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      details: 'Master the intricacies of JavaScript and become a pro. This course dives deep into advanced topics and best practices.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/javascript.jpg'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      details: 'Become a full-stack web developer with our comprehensive bootcamp. This course covers everything from HTML and CSS to backend development and deployment.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/web-development.jpg'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    }
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Trending Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">
                  {course.details.split('. ')[0]}.
                </p>
                <NavLink
                  to={`/course-detail/${course.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md block text-center text-lg md:text-xl"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
