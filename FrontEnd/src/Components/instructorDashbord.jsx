import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome, FaPlus, FaEdit, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import SidebarInst from './SidebarInst';
import TeacherWelcomeSection from './TeacherWelcomeSection';

const InstructorDashboard = ({ instructorName, instructorEmail, instructorImage }) => {
    const [courses, setCourses] = useState([]);
    const [enrolledStudents, setEnrolledStudents] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [enrollmentRequests, setEnrollmentRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/course/getAllCourses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const fetchEnrolledStudents = async () => {
        // Your logic to fetch enrolled students
    };

    const fetchEnrollmentRequests = async (courseId) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/enrollment/enrollment-requests/${courseId}`);
            setEnrollmentRequests(response.data);
        } catch (error) {
            console.error('Error fetching enrollment requests:', error);
            setError('Failed to load enrollment requests.');
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = async (requestId) => {
        try {
            await axios.put(`http://localhost:5000/api/enrollment/enrollment-request/${requestId}/accept`);
            const updatedRequests = enrollmentRequests.map(request => {
                if (request.id === requestId) {
                    return { ...request, status: 'accepted' };
                }
                return request;
            });
            setEnrollmentRequests(updatedRequests);
        } catch (error) {
            console.error('Error accepting enrollment request:', error);
        }
    };

    const handleReject = async (requestId) => {
        try {
            await axios.put(`http://localhost:5000/api/enrollment/enrollment-request/${requestId}/reject`);
            const updatedRequests = enrollmentRequests.map(request => {
                if (request.id === requestId) {
                    return { ...request, status: 'rejected' };
                }
                return request;
            });
            setEnrollmentRequests(updatedRequests);
        } catch (error) {
            console.error('Error rejecting enrollment request:', error);
        }
    };



    useEffect(() => {
        fetchCourses();
        fetchEnrolledStudents();
    }, []);

    useEffect(() => {
        if (selectedCourseId) {
            fetchEnrollmentRequests(selectedCourseId);
        }
    }, [selectedCourseId]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleEditProfile = () => {
        navigate('/update-profile');
    };

    return (
        <div>
            <div className="flex min-h-screen bg-gray-100">
                <SidebarInst />
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
                    <div className="text-blue-700 p-1 w-full self-start mb-2">
                        <TeacherWelcomeSection />
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
                                        <button
                                           
                                            className="mt-2 inline-block text-blue-500 hover:underline">
                                            View Detail
                                        </button>
                                        <button  onClick={() => setSelectedCourseId(course.id)}
                                        className="mt-2 inline-block text-blue-500 hover:underline" >
                                            Rquests
                                        </button>
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
                                        <h3 className="text-lg font-semibold text-blue-700 mb-2">{student.username}</h3>
                                        <p className="text-gray-700">{student.course}</p>
                                        <p className="text-gray-500">{student.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {selectedCourseId && (
                        <div className="mt-10 w-full">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Enrollment Requests for Course {selectedCourseId}</h2>
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p className="text-red-500">{error}</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {enrollmentRequests.map(request => (
                                    <div key={request.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <div className="p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{request.Student.username}</h3>
                                                    <p className="text-gray-700">{request.Student.email}</p>
                                                </div>
                                                <img src={request.Student.image} alt={request.Student.username} className="w-12 h-12 rounded-full object-cover" />
                                            </div>
                                            <div className="mt-2">
                                                <button
                                                    className="mr-2 inline-block text-green-500 hover:underline"
                                                    onClick={() => handleAccept(request.id)}>
                                                    Accept
                                                </button>
                                                <button
                                                    className="inline-block text-red-500 hover:underline"
                                                    onClick={() => handleReject(request.id)}>
                                                    Reject
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;
