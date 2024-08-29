import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Telemedicine from './js/Telemedicine';
// import Settings from './js/Settings';
// import WelcomePage from './js/WelcomePage';
// import SignupPage from './js/SignupPage';
// import LoginPage from './js/LoginPage';
// import LandingPage from './js/LandingPage';
<<<<<<< HEAD
import AppointmentPage from './js/Appointment';
=======
// import AppointmentPage from './js/Appointment';
>>>>>>> 45d913f713fe929688c3b8426643b1b47758f966

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
<<<<<<< HEAD
        <Route path="/" element={<AppointmentPage />} />
=======
        {/* <Route path="/" element={<AppointmentPage />} /> */}
>>>>>>> 45d913f713fe929688c3b8426643b1b47758f966
      </Routes>
    </Router>
    
  );
}

export default App;
