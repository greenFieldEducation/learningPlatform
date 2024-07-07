import React from 'react';

const WelcomeSection = () => {
  // Generate a motivational message
  const motivationalMessages = [
    "Keep pushing forward! 🚀",
    "You're doing great! 👍",
    "Believe in yourself! ✨",
    "Stay focused and never give up! 🎯",
    "Every step is progress! 🌟",
  ];
  
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-full md:w-7/12">
      <h1 className="text-4xl font-bold mb-4">Welcome, jhon!</h1>
      <p className="text-xl mb-4">{randomMessage}</p>
      
    </div>
  );
};

export default WelcomeSection;
