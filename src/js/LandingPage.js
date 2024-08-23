import React from 'react';
import '../css/LandingPage.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="welcome-section">
          <h1>Welcome <span className="name">Pulane</span>!</h1>
          <p className="greeting">Have a nice day!</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What would you like to do?" />
          <span className="search-icon">🔍</span>
        </div>
      </header>

      <main className="categories">
        <div className="category-card">
          <span className="icon updates-icon">🔔</span>
          <p>Updates</p>
        </div>
        <div className="category-card">
          <span className="icon consult-icon">👩‍⚕️</span>
          <p>Telemedicine Consultation</p>
        </div>
        <div className="category-card">
          <span className="icon about-icon">👥</span>
          <p>About Us</p>
        </div>
        <div className="category-card">
          <span className="icon loading-icon">⏳</span>
          <p>Loading...</p>
        </div>
      </main>

      {/* <footer className="footer-nav">
        <div className="nav-item">Home</div>
        <div className="nav-item">Consult</div>
        <div className="nav-item">Schedule</div>
        <div className="nav-item">Settings</div>
      </footer> */}
    </div>
  );
}

export default App;