import React from 'react';

const TeacherWelcomeSection = () => {
  // Generate a motivational message
  const motivationalMessages = [
    "Keep inspiring young minds! 🌟",
    "Your impact is profound! 📚",
    "Believe in the power of education! ✨",
    "Every lesson makes a difference! 🎓",
    "Your dedication shapes the future! 🚀",
  ];
  
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-full md:w-7/12">
      <h1 className="text-4xl font-bold mb-4">Welcome, Teacher!</h1>
      <p className="text-xl mb-4">{randomMessage}</p>
    </div>
  );
};

export default TeacherWelcomeSection;
