import React from 'react';
import { NavLink } from 'react-router-dom';
const PopularCourses = ({ courses }) => {
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
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{course.course}</h3>
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
