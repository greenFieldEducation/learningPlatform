import React, { useRef } from 'react';
import Welcome from './WelcomeSection.jsx';
import StudentProfileCard from './StudentProfileCard.jsx';
import CourseEnrollment from './CourseEnrollment.jsx';
import Sidebar from './SideBar.jsx';
import CalendarView from './CalendarView .jsx';

const StudentDashboard = () => {
  const welcomeRef = useRef(null);
  const calendarRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'welcome':
        welcomeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'calendar':
        calendarRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Sidebar scrollToSection={scrollToSection} />
      <div className="flex flex-col w-full p-4 ml-20">
        <div ref={welcomeRef} className="flex flex-row justify-between mb-6 mr-9">
          <div className="flex-1 lg:mr-20">
            <Welcome />
          </div>
        </div>
        <div>
          <CourseEnrollment />
        </div>
        <div ref={calendarRef} className="mt-4">
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
