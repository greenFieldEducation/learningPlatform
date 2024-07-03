import React from 'react';

const PopularCourses = () => (
  <section className="py-12 bg-gray-200">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Course Title</h3>
            <p className="text-gray-600 mb-4">Course Description</p>
            <a
              href="/course-detail"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md block text-center text-lg md:text-xl"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PopularCourses;
