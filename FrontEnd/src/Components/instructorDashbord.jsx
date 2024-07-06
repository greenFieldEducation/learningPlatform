import React, { useState, useEffect } from 'react';
import { FaHome, FaPlus, FaEdit, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const InstructorDashboard = ({ instructorName, instructorEmail, instructorImage }) => {
    const [motivationalPhrase, setMotivationalPhrase] = useState('');
    const [courses, setCourses] = useState([]);
    const [enrolledStudents, setEnrolledStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        generateMotivationalPhrase();
        // Dummy data initialization
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleEditProfile = () => {
        navigate('/update-profile');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="flex flex-col items-center w-16 bg-blue-700 text-white p-6">
                <FaHome className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
                <FaPlus className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={() => navigate('/add-course')} />
                <FaEdit className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={handleEditProfile} />
                <FaBell className="my-4 text-2xl cursor-pointer hover:text-blue-300" /> {/* Notification icon */}
                <FaSignOutAlt className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={handleLogout} />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 flex flex-col items-end">
                {/* Instructor Profile Info */}
                <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mb-6 self-start">
                    <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-blue-500">
                        <img src={instructorImage} className="w-full h-full object-cover" alt="Instructor" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-blue-700">{instructorName}</h2>
                        <p className="text-gray-600">{instructorEmail}</p>
                    </div>
                </div>

                {/* Welcome Message and Motivational Phrase */}
                <div className="bg-white p-6 rounded-lg shadow-md max-w-md mb-6">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">Welcome, Instructor!</h2>
                    <p className="text-lg text-gray-700 mb-4">We are glad to have you here. Keep inspiring and teaching!</p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded-lg">
                        <p className="text-lg text-blue-800">{motivationalPhrase}</p>
                    </div>
                </div>

                {/* Courses Section */}
                <div className="mt-10 w-full">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Your Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map(course => (
                            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={course.imageUrl} alt={course.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{course.name}</h3>
                                    <p className="text-gray-600">{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enrolled Students Section */}
                <div className="mt-10 w-full">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Your Enrolled Students</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {enrolledStudents.map(student => (
                            <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={student.imageUrl} alt={student.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{student.name}</h3>
                                    <p className="text-gray-600">{student.email}</p>
                                    <p className="text-gray-600">Course: {student.course}</p>
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
