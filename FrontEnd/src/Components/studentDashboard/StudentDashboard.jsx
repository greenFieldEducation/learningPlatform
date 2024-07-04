import React from "react";
import Sidebar from "./SideBar";
import WelcomeSection from "./WelcomeSection.jsx";
import CourseEnrollment from "./CourseEnrollment.jsx";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      
        <Sidebar />
      

      
      <div className="flex-1 p-4 flex flex-col items-start">
        <WelcomeSection />
        <CourseEnrollment/>
        
      </div>
    </div>
  );
};

export default StudentDashboard;
