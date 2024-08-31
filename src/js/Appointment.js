import React from 'react';
import '../css/AppointmentPage.css';
import { FaArrowLeft, FaSearch, FaUserCircle, FaHome, FaUserMd, FaCalendarAlt, FaCogs } from 'react-icons/fa';
import PhoneFrame from './PhoneFrame';

function App() {
  return (
    <PhoneFrame>
        <div className="app-container">
          <Header />
          <div className="content">
            <AppointmentCard title="Upcoming appointments" />
            <AppointmentCard title="Previous appointments" />
          </div>
          <FooterNavigation />
        </div>
        </PhoneFrame>
  );
}

const Header = () => (
  <div className="header">
    <div className="header-left">
      <button className="back-button">
        <FaArrowLeft />
      </button>
      <h1>Updates</h1>
    </div>
    <div className="header-icons">
      <FaSearch className="icon" />
      <FaUserCircle className="icon" />
    </div>
  </div>
);

const AppointmentCard = ({ title }) => (
  <div className="appointment-section">
    <div className="section-header">
      <h2>{title}</h2>
      <a href="#">See all</a>
    </div>
    <div className="appointment-card">
      <div className="card-content">
        <img
          src={require('../images/dogg.png')}
          alt="No appointments"
          className="appointment-image"
        />
        <p>No upcoming appointments....</p>
      </div>
    </div>
  </div>
);

const FooterNavigation = () => (
  <div className="footer-navigation">
    <div className="icon-container">
      <FaHome className="icon" />
      <span className="icon-label">Home</span>
    </div>
    <div className="icon-container">
      <FaUserMd className="icon" />
      <span className="icon-label">Consult</span>
    </div>
    <div className="icon-container">
      <FaCalendarAlt className="icon" />
      <span className="icon-label">Schedule</span>
    </div>
    <div className="icon-container">
      <FaCogs className="icon" />
      <span className="icon-label">Settings</span>
    </div>
  </div>
);

export default App;