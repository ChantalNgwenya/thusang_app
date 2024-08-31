import React from 'react';
import '../css/Settings.css';
import { FaArrowLeft, FaUserCircle, FaBell, FaShieldAlt, FaCogs, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="phone-screen">
      <div className="settings-container">
        <header className="settings-header">
            <button className="back-button"><FaArrowLeft /></button>
          <h1>Settings</h1>
        </header>
        <div className="settings-list">
          <div className="settings-item profile-item">
            <div className="icon-wrapper">
              <FaUserCircle className="icon" />
              <span>Profile</span>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="settings-item">
            <div className="icon-wrapper">
              <FaBell className="icon" />
              <span>Notifications</span>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="settings-item">
            <div className="icon-wrapper">
              <FaShieldAlt className="icon" />
              <span>Privacy</span>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="settings-item">
            <div className="icon-wrapper">
              <FaCogs className="icon" />
              <span>General</span>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="settings-item">
            <div className="icon-wrapper">
              <FaInfoCircle className="icon" />
              <span>About Us</span>
            </div>
            <span className="arrow">›</span>
          </div>
          <div className="settings-item">
            <div className="icon-wrapper">
              <FaSignOutAlt className="icon" />
              <span>Logout</span>
            </div>
            <span className="arrow">›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
