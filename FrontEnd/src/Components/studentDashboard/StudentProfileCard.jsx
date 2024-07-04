import React from 'react';

const StudentProfileCard = () => {
  // Dummy data for one student
  const student = {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    gender: 'Men',
    phone: '123-456-7890',
    fields: 'Math',
    role: 'student',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
  };

  return (
    <div className="w-60 rounded-lg overflow-hidden shadow-lg bg-white p-4 mb-4">
      <div className="flex items-center justify-center mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src={student.image || 'https://via.placeholder.com/150'}
          alt={`${student.username}'s profile`}
        />
      </div>
      <div className="text-center mb-4">
        <h2 className="text-md font-bold text-gray-800">{student.username}</h2>
        <p className="text-gray-600">{student.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700">Details</h3>
        <ul className="list-disc list-inside text-gray-700 text-xs">
          <li><strong>Gender:</strong> {student.gender}</li>
          <li><strong>Phone:</strong> {student.phone}</li>
          {student.fields && <li><strong>Field:</strong> {student.fields}</li>}
          <li><strong>Role:</strong> {student.role}</li>
        </ul>
      </div>
      <div className="text-center">
        <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-xs">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default StudentProfileCard;
