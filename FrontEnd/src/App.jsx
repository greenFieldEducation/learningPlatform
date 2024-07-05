import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import SignUp from './Components/Auth/SignUp.jsx';
import Login from './Components/Auth/Login.jsx';
import StudentDashboard from './Components/studentDashboard/StudentDashboard.jsx';
import InstructorDashboard from './Components/instructorDashbord.jsx';
import CourseDetails from './Components/CourseDetail.jsx'
import  {subscribeUser} from './subscribeUser.js'


function App() {
  useEffect(() => {
      subscribeUser();
  }, []);
}






const App = () => (
  
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
      <Route path ="/course-detail/:id" element={<CourseDetails />} />
    </Routes>
  </Router>
);

export default App;
