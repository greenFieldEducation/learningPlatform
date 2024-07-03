import React from 'react'
import './index.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import LandingPage from '../src/pages/LandingPage.jsx'
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
