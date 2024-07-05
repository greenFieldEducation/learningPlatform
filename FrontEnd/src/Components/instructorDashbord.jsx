import React, { useState, useEffect } from 'react';
import { FaHome, FaPlus, FaEdit, FaSignOutAlt, FaBell } from 'react-icons/fa';

const InstructorDashboard = () => {
  const [motivationalPhrase, setMotivationalPhrase] = useState('');
  const [courses, setCourses] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  useEffect(() => {
    generateMotivationalPhrase();
    // dummy data
    const dummyCourses = [
      {
        id: 1,
        name: 'Mathematics 101',
        description: 'Learn the basics of mathematics.',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537629942l/3647656.jpg',
      },
      {
        id: 2,
        name: 'Economics for Beginners',
        description: 'Introduction to economics principles.',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537629942l/3647656.jpg',
      },
      {
        id: 3,
        name: 'Introduction to Physics',
        description: 'Explore the fundamental principles of physics.',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537629942l/3647656.jpg',
      },
    ];
    setCourses(dummyCourses);

    // dummy data
    const dummyEnrolledStudents = [
      { id: 1, name: 'Samir', email: 'samir@gmail.com', course: 'Mathematics 101', imageUrl: 'https://res.cloudinary.com/ali22/image/upload/v1711484433/koss/gkb80z68jhyqlbgusyf1.jpg' },
      { id: 2, name: 'Samir', email: 'samir@gmail.com', course: 'Economics for Beginners', imageUrl: 'https://res.cloudinary.com/ali22/image/upload/v1711484433/koss/gkb80z68jhyqlbgusyf1.jpg' },
      { id: 3, name: 'Samir', email: 'samir@gmail.com', course: 'Introduction to Physics', imageUrl: 'https://res.cloudinary.com/ali22/image/upload/v1711484433/koss/gkb80z68jhyqlbgusyf1.jpg' },
    ];
    setEnrolledStudents(dummyEnrolledStudents);
  }, []);

  const generateMotivationalPhrase = () => {
    const phrases = [
      "Believe in yourself!",
      "Keep pushing forward.",
      "Every day is a new opportunity.",
      "Strive for progress, not perfection.",
      "You are capable of amazing things.",
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setMotivationalPhrase(phrases[randomIndex]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col items-center w-16 bg-blue-700 text-white p-6">
        <FaHome className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
        <FaPlus className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
        <FaEdit className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
        <FaBell className="my-4 text-2xl cursor-pointer hover:text-blue-300" /> {/* Notification icon */}
        <FaSignOutAlt className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Your Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Welcome, Instructor!</h2>
          <p className="text-lg text-gray-700 mb-4">We are glad to have you here. Keep inspiring and teaching!</p>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded-lg">
            <p className="text-lg text-blue-800">{motivationalPhrase}</p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <img src={course.imageUrl} alt={course.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.name}</h3>
                  <p className="text-gray-700 mb-2">{course.description}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    View Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enrolled Students Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrolled Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledStudents.map((student) => (
              <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                {/* Header Section */}
                <div className="bg-blue-500 text-white px-4 py-2">
                  <h3 className="text-lg font-semibold">{student.course}</h3>
                </div>
                {/* Body Section */}
                <div className="p-4 flex items-center">
                  <img src={student.imageUrl} alt={student.name} className="w-20 h-20 rounded-full object-cover mr-4" /> {/* Adjusted image size */}
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{student.name}</h3>
                    <p className="text-gray-700 mb-2">{student.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
