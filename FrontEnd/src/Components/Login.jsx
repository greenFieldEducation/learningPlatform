import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/LandingPage/Navbar.jsx';

const Login = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-6">
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <NavLink to="/" className="text-blue-500 hover:underline">
                Go back to home
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;