import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="bg-blue-600 p-4 flex items-center justify-between">
    <div className="flex items-center space-x-8">
      <img src="https://r2.erweima.ai/i/jRTXCGIYQUyj6vG6vuj6xA.jpg" alt="Learniverse Logo" className="h-20" />
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded-md focus:outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.555-4.555M9 17a8 8 0 100-16 8 8 0 000 16z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="flex items-center space-x-8">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-white hover:text-gray-300 text-lg cursor-pointer"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="courses"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-white hover:text-gray-300 text-lg cursor-pointer"
      >
        Courses
      </ScrollLink>
      <ScrollLink
        to="instructors"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-white hover:text-gray-300 text-lg cursor-pointer"
      >
        Instructors
      </ScrollLink>
      <ScrollLink
        to="feedback"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-white hover:text-gray-300 text-lg cursor-pointer"
      >
        Feedback
      </ScrollLink>
      <ScrollLink
        to="user-feedbacks"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-white hover:text-gray-300 text-lg cursor-pointer"
      >
        User Feedback
      </ScrollLink>
      <Link to="/login" className="text-white hover:text-gray-300 text-lg">Login</Link>
      <Link to="/signup" className="text-white hover:text-gray-300 text-lg">Signup</Link>
    </div>
  </nav>
);

export default Navbar;
