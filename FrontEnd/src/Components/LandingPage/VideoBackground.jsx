import React from 'react';

const VideoBackground = () => (
  <section className="relative h-screen flex items-center justify-center">
    <video
      className="absolute inset-0 object-cover w-full h-full"
      autoPlay
      loop
      muted
    >
      <source src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-blue-200 opacity-50"></div>
    <div className="text-white text-center z-10">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">Welcome to Learniverse</h1>
      <h1 className="text-3xl md:text-3xl font-bold mb-4">a universe where you can learn and inplement new things </h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-md shadow-lg ">
        Get Started
      </button>
    </div>
  </section>
);

export default VideoBackground;
