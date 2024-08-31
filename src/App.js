import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Telemedicine from './js/Telemedicine';
// import Settings from './js/Settings';
// import WelcomePage from './js/WelcomePage';
// import SignupPage from './js/SignupPage';
// import LoginPage from './js/LoginPage';
// import LandingPage from './js/LandingPage';
// import AppointmentPage from './js/Appointment';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Settings />} /> */}
        <Route path='/'element={<Telemedicine/>} />
        {/* <Route path="/" element={<WelcomePage />} /> */}
        {/* <Route path="/" element={<SignupPage />} /> */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        {/* <Route path="/" element={<LandingPage />} /> */}
        {/* <Route path="/" element={<AppointmentPage />} /> */}/
      </Routes>
    </Router>
    
  );
}

export default App;
