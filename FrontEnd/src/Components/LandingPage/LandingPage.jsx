  import React from 'react';
  import Navbar from './Navbar.jsx';
  import VideoBackground from './VideoBackground.jsx';
  import PopularCourses from './PopularCourses.jsx';
  import PopularInstructors from './PopularInstructors.jsx';
  import UserFeedbacks from './UserFeedbacks.jsx';
  import Feedback from './Feedback.jsx';
  import Footer from './Footer.jsx';

  const LandingPage = () => (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <section id="home">
        <VideoBackground />
      </section>
      <section id="courses" className="bg-gray-200">
        <PopularCourses />
      </section>
      <section id="instructors" className="bg-gray-100">
        <PopularInstructors />
      </section>
      <section id="user-feedbacks" className="bg-gray-200">
        <UserFeedbacks />
      </section>
      <section id="feedback" className="bg-gray-100">
        <Feedback />
      </section>
      <Footer />
    </div>
  );

  export default LandingPage;
