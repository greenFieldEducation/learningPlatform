import React, { useRef } from 'react';
import Welcome from './WelcomeSection.jsx';
import StudentProfileCard from './StudentProfileCard.jsx';
import Sidebar from './SideBar.jsx';
import CalendarView from './CalendarView .jsx';
import MyCourses from './MyCourses.jsx';
import AllCourses from './AllCourses.jsx';


const StudentDashboard = () => {
  const welcomeRef = useRef(null);
  const calendarRef = useRef(null);
const allCoursesRef=useRef(null)

  const scrollToSection = (section) => {
    switch (section) {
      case 'welcome':
        welcomeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'calendar':
        calendarRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'categories':
        allCoursesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  // courseData.js


  

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Sidebar scrollToSection={scrollToSection} />
      <div className="flex flex-col w-full p-2 ml-20 ">
        <div ref={welcomeRef} className="flex flex-row justify-between mb-6 mr-9">
          <div className="flex-1 lg:mr-20">
            <Welcome />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          
            < MyCourses/>
          
        </div>
        <h2 ref={allCoursesRef} className="text-2xl font-bold mb-4">all courses</h2>
          
          < AllCourses/>
        
      </div>
        <div ref={calendarRef} className="mt-4">
          <CalendarView />

        </div>
      </div>
  );
};

export default StudentDashboard;
