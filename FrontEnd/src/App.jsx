import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import SignUp from './Components/Auth/SignUp.jsx';
import Login from './Components/Auth/Login.jsx';
import StudentDashboard from './Components/studentDashboard/StudentDashboard.jsx';
import InstructorDashboard from './Components/instructorDashbord.jsx'
import UpdateInstructorProfile from './Components/UpdateInstructorProfile.jsx';
import AddCourse from './Components/AddCourse.jsx';
import InstructorCourseDetail from './Components/InstructorCourseDetail.jsx';
import StudentProfile from './Components/studentDashboard/StudentProfile.jsx';

const App = () => {
  const [id, setStudentId] = useState();

  const setId = (Id) => {
    setStudentId(Id);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setId={setId} />} />
        <Route path="/student-dashboard" element={<StudentDashboard id={id} />} />
         <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> 
        <Route path="/update-profile" element={<UpdateInstructorProfile />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/instructor-course-detail/:id" element={<InstructorCourseDetail />} />
        <Route path="/student-dashboard/profile" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
