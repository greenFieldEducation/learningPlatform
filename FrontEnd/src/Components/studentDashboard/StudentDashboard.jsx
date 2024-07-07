import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './WelcomeSection.jsx';
import Sidebar from './SideBar.jsx';
import CalendarView from './CalendarView .jsx';
import MyCourses from './MyCourses.jsx';
import AllCourses from './AllCourses.jsx';
import DetailsPopUpModal from './DetailsPopUpModal.jsx';

const StudentDashboard = ({id}) => {
  const welcomeRef = useRef(null);
  const calendarRef = useRef(null);
  const allCoursesRef = useRef(null);

  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/course/getAllCourses"); 
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

  const handleEnroll = (newEnrollment) => {
    setMyCourses([...myCourses, newEnrollment]);
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
          <MyCourses myCourses={myCourses} />
        </div>
        <div ref={allCoursesRef} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">All Courses</h2>
          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <AllCourses courses={courses} onCourseSelect={setSelectedCourse} />
          )}
        </div>
        <div ref={calendarRef} className="mt-4">
          <CalendarView />
        </div>
        {selectedCourse && (
          <DetailsPopUpModal 
            id ={id}
            isOpen={!!selectedCourse}
            onClose={() => setSelectedCourse(null)}
            course={selectedCourse}
            onEnroll={handleEnroll}
          />
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
