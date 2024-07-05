import React from 'react';

const DetailsPopUpModal = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
        <p className="mb-2"><strong>Description:</strong> {course.description}</p>
        <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
        <p className="mb-2"><strong>Rating:</strong> {course.rating}</p>
        <p className="mb-2"><strong>Start Date:</strong> {course.startDate}</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 transition duration-200"
          onClick={() => alert('Enrolled!')}
        >
          Enroll
        </button>
        <button
          className="mt-4 ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailsPopUpModal;
