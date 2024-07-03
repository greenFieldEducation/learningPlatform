import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>
);

export default App;
