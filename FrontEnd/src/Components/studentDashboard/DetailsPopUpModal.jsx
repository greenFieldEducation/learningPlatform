import React, { useState } from 'react';
import axios from 'axios';

const DetailsPopUpModal = ({ isOpen, onClose, course }) => {
  const [enrolling, setEnrolling] = useState(false);
  const [error, setError] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = async () => {
    setEnrolling(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/courseEnroll/enrollment-request', { courseId: course.id });
      console.log('Enrollment successful:', response.data);
      setEnrolled(true);
    } catch (error) {
      console.error('Failed to enroll:', error);
      setError('Failed to enroll. Please try again later.');
    } finally {
      setEnrolling(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
        <p className="mb-2"><strong>Description:</strong> {course.description}</p>
        <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
        <p className="mb-2"><strong>Rating:</strong> {course.rating}</p>
        <p className="mb-2"><strong>Start Date:</strong> {course.startDate}</p>
        {enrolled ? (
          <p className="text-green-600 mb-4">You have successfully enrolled in this course!</p>
        ) : (
          <button
            className={`mt-4 px-4 py-2 ${enrolling ? 'bg-gray-500' : 'bg-indigo-500'} text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 transition duration-200`}
            onClick={handleEnroll}
            disabled={enrolling}
          >
            {enrolling ? 'Enrolling...' : 'Enroll'}
          </button>
        )}
        <button
          className="mt-4 ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default DetailsPopUpModal;
