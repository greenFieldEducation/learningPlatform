import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import SignUp from './Components/SignUp.jsx';
import Login from './Components/Login.jsx'




const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path ="/login" element ={<Login />}/>
        
    </Routes>
  </Router>
);

export default App;
