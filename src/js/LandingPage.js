import React from 'react';
import '../css/AppointmentPage.css';

function App() {
  return (
    <div className="screen">
      <header className="header">
        <div className="icon-section">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
        </div>
        <h1 className="welcome-text">Welcome <span className="name">Pulane</span>!</h1>
        <p className="greeting">Have a nice day!</p>
        <p className="prompt-text">What would you like to do?</p>
      </header>

      <div className="categories">
        <p className="categories-text">Categories</p>
        <div className="category-card">
          <span className="icon">🔔</span>
          <p>Updates</p>
        </div>
        <div className="category-card">
          <span className="icon">👩‍⚕️</span>
          <p>Telemedicine Consultation</p>
        </div>
        <div className="category-card">
          <span className="icon">👥</span>
          <p>About Us</p>
        </div>
        <div className="category-card">
          <span className="icon">⏳</span>
          <p>Loading...</p>
        </div>
      </div>

      <footer className="footer-nav">
        <span className="nav-icon">🏠</span>
        <span className="nav-icon">💻</span>
        <span className="nav-icon">🗓️</span>
        <span className="nav-icon">⚙️</span>
      </footer>
    </div>
  );
}

export default App;
