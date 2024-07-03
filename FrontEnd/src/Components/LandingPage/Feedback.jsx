import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Feedback = () => (
  <section id="feedback" className="py-12 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Feedback</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg md:text-xl font-medium text-gray-800 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg md:text-xl font-medium text-gray-800 mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-lg md:text-xl font-medium text-gray-800 mb-2">Your Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Type your feedback here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition-colors duration-300 ease-in-out text-lg md:text-xl"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  </section>
);

export default Feedback;
