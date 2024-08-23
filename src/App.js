import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Settings from './js/Settings';
// import WelcomePage from './js/WelcomePage';
// import SignupPage from './js/SignupPage';
// import LoginPage from './js/LoginPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Settings />} /> */}
        {/* <Route path="/" element={<WelcomePage />} /> */}
        {/* <Route path="/" element={<SignupPage />} /> */}
        {/* <Route path="/" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
