import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar.jsx";
import WelcomeSection from "./WelcomeSection.jsx";
const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Sidebar />
      <div className="container mx-auto p-4">
        <WelcomeSection />
      </div>
    </div>
  );
};

export default StudentDashboard;
