import React from 'react';
import Welcome from './WelcomeSection.jsx';
import StudentProfileCard from './StudentProfileCard.jsx';
import CourseEnrollment from './CourseEnrollment.jsx';
import Sidebar from './SideBar.jsx';
import CalendarComponent from './CalendarComponent.jsx';

const StudentDashboard = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-row justify-between mb-6">
          
          <div className="flex-1 lg:mr-4">
            <Welcome />
          </div>
        </div>
        <CourseEnrollment />

      </div>

    </div>
  );
};

export default StudentDashboard;
