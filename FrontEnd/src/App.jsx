import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import StudentDashboard from './Components/studentDashboard/StudentDashboard.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
    </Routes>
  </Router>
);

export default App;
