import React, { useState } from 'react';
import axios from 'axios';

const DetailsPopUpModal = ({ isOpen, onClose, course, onEnroll, id }) => {
  const [enrolling, setEnrolling] = useState(false);
  const [error, setError] = useState(null);
console.log(id )
  const enrollStudent = async () => {
    try {
      setEnrolling(true); 
      const response = await axios.post('http://localhost:5000/api/enrollment/enrollment-request/create', {
        studentId: id, 
        courseId: course.id, 
      });

      if (response.status === 201) {
        console.log('Enrollment successful:', response.data);
        onEnroll(response.data); 
        onClose(); 
      } else {
        console.error('Failed to enroll:', response.statusText);
        setError('Failed to enroll. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to enroll:', error);
      setError('Failed to enroll. Please try again later.');
    } finally {
      setEnrolling(false); 
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
            disabled={enrolling}
          >
            Close
          </button>
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-200 ${enrolling && 'opacity-50 cursor-not-allowed'}`}
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
