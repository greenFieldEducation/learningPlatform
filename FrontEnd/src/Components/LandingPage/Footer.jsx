import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Courses
          </Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/signup" className="hover:text-gray-300">Signup</Link>
          <Link
            to="instructors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Instructors
          </Link>
          <Link to="/feedback" className="hover:text-gray-300">Feedback</Link>
        </div>
        <p className="mt-4">© 2024 Learniverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
