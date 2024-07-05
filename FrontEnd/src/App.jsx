import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import SignUp from './Components/SignUp.jsx';
import Login from './Components/Login.jsx';
import StudentDashboard from './Components/studentDashboard/StudentDashboard.jsx';
import InstructorDashboard from './Components/instructorDashbord.jsx';

const App = () => (
  
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
    </Routes>
  </Router>
);

export default App;
