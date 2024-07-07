import React, { useState } from 'react';
import axios from 'axios';

const DetailsPopUpModal = ({ isOpen, onClose, course, onEnroll, studentId }) => {
  const [enrolling, setEnrolling] = useState(false);
  const [error, setError] = useState(null);
   const courseId=course.id
  const enrollStudent = async ( studentId) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/courseEnroll/enrollment-request', {
        courseId: courseId,
        studentId: studentId,
      });
  
      if (response.status === 200) {
        console.log('Enrollment successful:', response.data);
        return response.data; // Assuming backend returns some data on success
      } else {
        console.error('Failed to enroll:', response.statusText);
        throw new Error('Failed to enroll. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to enroll:', error);
      throw new Error('Failed to enroll. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
        <p className="mb-4">{course.description}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700 transition duration-200"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-200"
            onClick={enrollStudent}
            disabled={enrolling}
          >
            {enrolling ? 'Enrolling...' : 'Enroll'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default DetailsPopUpModal;
