import React from 'react';
import '../css/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <button className="back-button">←</button>
        <h1>Settings</h1>
      </header>
      <div className="settings-list">
        <div className="settings-item">
          {/* span<i className="icon">👤</i> */}
          <span>Profile</span>
          <span className="arrow">›</span>
        </div>
        <div className="settings-item">
          {/* <i className="icon">🔔</i> */}
          <span>Notifications</span>
          <span className="arrow">›</span>
        </div>
        <div className="settings-item">
          {/* <i className="icon">🛡️</i> */}
          <span>Privacy</span>
          <span className="arrow">›</span>
        </div>
        <div className="settings-item">
          {/* <i className="icon">⚙️</i> */}
          <span>General</span>
          <span className="arrow">›</span>
        </div>
        <div className="settings-item">
          {/* <i className="icon">ℹ️</i> */}
          <span>About Us</span>
          <span className="arrow">›</span>
        </div>
        <div className="settings-item">
          {/* <i className="icon">↗️</i> */}
          <span>Logout</span>
          <span className="arrow">›</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
