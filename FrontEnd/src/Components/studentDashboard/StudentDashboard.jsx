import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './WelcomeSection.jsx';
import StudentProfileCard from './StudentProfileCard.jsx';
import Sidebar from './SideBar.jsx';
import CalendarView from './CalendarView .jsx';
import MyCourses from './MyCourses.jsx';
import AllCourses from './AllCourses.jsx';

const StudentDashboard = () => {
  const welcomeRef = useRef(null);
  const calendarRef = useRef(null);
  const allCoursesRef = useRef(null);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/course/getAllCourses"); 
        setCourses(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const scrollToSection = (section) => {
    switch (section) {
      case 'welcome':
        welcomeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'calendar':
        calendarRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'allCourses':
        allCoursesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <Sidebar scrollToSection={scrollToSection} />
      <div className="flex flex-col w-full p-2 ml-20">
        <div ref={welcomeRef} className="flex flex-row justify-between mb-6 mr-9">
          <div className="flex-1 lg:mr-20">
            <Welcome />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          <MyCourses />
        </div>
        <div ref={allCoursesRef} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">All Courses</h2>
          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <AllCourses courses={courses} />
          )}
        </div>
        <div ref={calendarRef} className="mt-4">
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
