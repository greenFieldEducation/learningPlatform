import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const UserFeedbacks = () => {
  // dummy data for feedbacks of the user
  const feedbacks = [
    { id: 1, name: "John Doe", feedback: "Great experience with the platform!" },
    { id: 2, name: "Jane Smith", feedback: "Awesome courses and instructors!" },
    { id: 3, name: "Michael Johnson", feedback: "Could improve user interface." },
    { id: 4, name: "Emily Davis", feedback: "Love the interactive features!" }
  ];

  return (
    <section id="user-feedbacks" className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">User Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{feedback.name}</h3>
                <p className="text-gray-600 mb-4">{feedback.feedback}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default UserFeedbacks;
