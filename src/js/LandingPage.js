import React from 'react';
import '../css/LandingPage.css';

function App() {
  return (
    <div className="phone-frame">
      <div className="screen">
        <header className="header">
          <div className="welcome-section">
            <h1 className="welcome-text">Welcome <span className="name">Pulane</span>!</h1>
            <p className="greeting">Have a nice day!</p>
          </div>
          <div className="icon-section">
            <span className="icon search">🔍</span>
            <span className="icon user">👤</span>
          </div>
        </header>

        <div className='text-category'>
            <p className='categories-text'>Categories</p>
          </div>
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
      </div>
    </div>
  );
}

export default App;
