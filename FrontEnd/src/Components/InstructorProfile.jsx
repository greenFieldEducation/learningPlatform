// InstructorProfile.jsx
import React from "react";
import { Link } from 'react-router-dom'; 
import { FaHome, FaHeart, FaCog, FaUser, FaEnvelope, FaBookOpen, FaPlusCircle } from 'react-icons/fa'; // Added FaPlusCircle


// PersonalInformation component
const PersonalInformation = ({ userName, email }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-bold mb-2">Personal Information</h3>
    <div className="flex items-center mb-2">
      <FaUser className="mr-2" />
      <p className="text-gray-600">{userName}</p>
    </div>
    <div className="flex items-center mb-2">
      <FaEnvelope className="mr-2" />
      <p className="text-gray-600">{email}</p>
    </div>
    {/* Add more fields as needed */}
  </section>
);

const Welcome = ({ userName }) => (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-md mb-10 w-96">
      <h2 className="text-3xl font-bold mb-4">Welcome, {userName}!</h2>
      <p className="text-lg">How are you doing?</p>
      {/* Add more personalized information or actions here */}
    </div>
  );

// Courses component
const Courses = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-bold mb-2">My Courses</h3>
    {/* Course list */}
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Sample course cards */}
      <li className="border rounded-lg overflow-hidden shadow-md">
        <img src="https://via.placeholder.com/300" alt="Course" className="w-full h-32 object-cover" />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-2">Course Title</h4>
          <p className="text-gray-600">Course description or details</p>
          <Link to="#" className="text-blue-500 hover:underline block mt-2">View Details</Link>
        </div>
      </li>
      {/* Add more course cards dynamically */}
    </ul>
  </section>
);

// InstructorProfile component
const InstructorProfile = () => {
  // Mock data for demonstration
  const userName = "samir"; // Replace with actual user data or fetch dynamically
  const email = "samir@example.com"; // Replace with actual user data or fetch dynamically

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Vertical Navbar */}
      <nav className="bg-blue-600 w-16 flex flex-col items-center">
        {/* Home Link */}
        <Link to="/" className="text-white hover:text-gray-300 p-4 block">
          <FaHome size={20} />
        </Link>
        {/* Add Course Link */}
        <Link to="/add-course" className="text-white hover:text-gray-300 p-4 block">
          <FaPlusCircle size={20} />
        </Link>
        {/* Favorite Link */}
        <Link to="/favorites" className="text-white hover:text-gray-300 p-4 block">
          <FaHeart size={20} />
        </Link>
        {/* Parameters Link */}
        <Link to="/parameters" className="text-white hover:text-gray-300 p-4 block">
          <FaCog size={20} />
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Welcome section */}
        <Welcome userName={userName} />

        {/* Personal information section */}
        <PersonalInformation userName={userName} email={email} />

        {/* Courses section */}
        <Courses />
        
        {/* Additional sections can be added here */}
      </main>
    </div>
  );
};

export default InstructorProfile;
