import React from 'react'
import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import LandingPage from '../src/pages/LandingPage.jsx'
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-up-instructor" element={<SignUpInstructor />} />
        <Route path="/sign-up-student" element={<SignUpStudent />} /> */}
      </Routes>
    </Router>
  )
}

export default App
