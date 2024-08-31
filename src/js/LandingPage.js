import React from 'react';
import { FaBell, FaUserMd, FaSyncAlt, FaSearch, FaUserCircle, FaHome, FaCalendarAlt, FaCogs } from 'react-icons/fa';
import '../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="phone-screen">
      <div className="top-section">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome <span className="user-name">Pulane</span>!</h1>
            <p>Have a nice day!</p>
          </div>
          <div className="icons">
            <FaSearch className="search-icon" aria-label="Search" />
            <FaUserCircle className="user-icon" aria-label="User Profile" />
          </div>
        </div>
        <p className="action-text">What would you like to do?</p>
      </div>
      <div className="category-text">
        <p>Categories</p>
      </div>
      <div className="categories-section">
        <div className="category">
          <FaBell className="category-icon" />
          <p>Updates</p>
        </div>
        <div className="category">
          <FaUserMd className="category-icon" />
          <p>Telemedicine Consultation</p>
        </div>
        <div className="category">
          <FaUserCircle className="category-icon" />
          <p>About Us</p>
        </div>
        <div className="category">
          <FaSyncAlt className="category-icon" />
          <p>Loading...</p>
        </div>
      </div>
      <FooterNavigation />
    </div>
  );
};

const FooterNavigation = () => (
  <div className="footer-navigation">
    <div className="icon-container">
      <FaHome className="icon" aria-label="Home" />
      <span className="icon-label">Home</span>
    </div>
    <div className="icon-container">
      <FaUserMd className="icon" aria-label="Consult" />
      <span className="icon-label">Consult</span>
    </div>
    <div className="icon-container">
      <FaCalendarAlt className="icon" aria-label="Schedule" />
      <span className="icon-label">Schedule</span>
    </div>
    <div className="icon-container">
      <FaCogs className="icon" aria-label="Settings" />
      <span className="icon-label">Settings</span>
    </div>
  </div>
);

export default LandingPage;