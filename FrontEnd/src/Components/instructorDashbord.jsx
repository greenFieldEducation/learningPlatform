import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome, FaPlus, FaEdit, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex flex-col items-center w-16 bg-blue-700 text-white p-6">
                <FaHome className="my-4 text-2xl cursor-pointer hover:text-blue-300" />
                <FaPlus className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={() => navigate('/add-course')} />
                <FaEdit className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={handleEditProfile} />
                <FaBell className="my-4 text-2xl cursor-pointer hover:text-blue-300" /> {/* Notification icon */}
                <FaSignOutAlt className="my-4 text-2xl cursor-pointer hover:text-blue-300" onClick={handleLogout} />
            </div>
            <div className="flex-1 p-10 flex flex-col items-end">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mb-6 self-start">
                    <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-blue-500">
                        <img src={instructorImage} className="w-full h-full object-cover" alt="Instructor" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-blue-700">{instructorName}</h2>
                        <p className="text-gray-600">{instructorEmail}</p>
                    </div>
                </div>
                <div className="bg-blue-100 text-blue-700 p-6 rounded-lg shadow-md max-w-md self-start mb-6">
                    <p className="text-lg font-semibold">{motivationalPhrase}</p>
                </div>
                <div className="mt-10 w-full">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map(course => (
                            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{course.title}</h3>
                                    <p className="text-gray-700">{course.description}</p>
                                    <p className="text-gray-500">{course.category}</p>
                                    <Link
                                        to={`/instructor-course-detail/${course.id}`}
                                        className="mt-2 inline-block text-blue-500 hover:underline">
                                    
                                        View Detail
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 w-full">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Enrolled Students</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {enrolledStudents.map(student => (
                            <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={student.imageUrl} alt={student.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{student.name}</h3>
                                    <p className="text-gray-700">{student.course}</p>
                                    <p className="text-gray-500">{student.email}</p>
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
