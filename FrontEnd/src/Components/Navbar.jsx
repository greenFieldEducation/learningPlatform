import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-black text-lg font-bold">Edunova</div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Courses</a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
