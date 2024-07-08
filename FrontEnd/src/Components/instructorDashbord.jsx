import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome, FaPlus, FaEdit, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const InstructorDashboard = ({ instructorName, instructorEmail, instructorImage }) => {
    const [motivationalPhrase, setMotivationalPhrase] = useState('');
    const [courses, setCourses] = useState([]);
    const [enrolledStudents, setEnrolledStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        generateMotivationalPhrase();
        fetchCourses();
        const dummyEnrolledStudents = [
            { id: 1, name: 'Samir', email: 'samir@gmail.com', course: 'Mathematics 101', imageUrl: 'https://res.cloudinary.com/ali22/image/upload/v1711484433/koss/gkb80z68jhyqlbgusyf1.jpg' },
            { id: 2, name: 'Samir', email: 'samir@gmail.com', course: 'Economics for Beginners', imageUrl: 'https://res.cloudinary.com/ali22/image/upload/v1711484433/koss/gkb80z68jhyqlbgusyf1.jpg' },
            { id: 3, name: 'Samir', email: 'samir@gmail.com', course: 'Introduction to Physics', imageUrl: 'https://res.cloudinary.com/ali22/image/upload/v1711484433/koss/gkb80z68jhyqlbgusyf1.jpg' },
        ];
        setEnrolledStudents(dummyEnrolledStudents);
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/getAllCourses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

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

    const handleViewDetails = (courseId) => {
        navigate(`/instructor-course-detail/${courseId}`);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex flex-col items-center w-16 bg-blue-700 text-white p-6">
                <FaHome className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
                <FaPlus className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={() => navigate('/add-course')} />
                <FaEdit className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={handleEditProfile} />
                <FaBell className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
                <FaSignOutAlt className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={handleLogout} />
            </div>
            <div className="flex-1 p-6">
                <div className="mb-6">
                    <div className="flex items-center">
                        <img src={instructorImage} alt="Instructor" className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h1 className="text-2xl font-semibold">{instructorName}</h1>
                            <p className="text-gray-600">{instructorEmail}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-blue-700 font-semibold">{motivationalPhrase}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white shadow-md rounded p-4">
                            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-700 mb-2">{course.description}</p>
                            <p className="text-gray-500">{course.category}</p>
                            <button 
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                onClick={() => handleViewDetails(course.id)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Enrolled Students</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {enrolledStudents.map((student) => (
                            <div key={student.id} className="bg-white shadow-md rounded p-4">
                                <div className="flex items-center">
                                    <img src={student.imageUrl} alt={student.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{student.name}</h3>
                                        <p className="text-gray-600">{student.email}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-2">{student.course}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;
