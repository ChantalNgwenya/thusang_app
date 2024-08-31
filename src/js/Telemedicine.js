import React from 'react';
import '../css/Telemedicine.css';
import childlineIcon from '../images/childline.png';
import ambulanceIcon from '../images/ambulance.png'; 
import legalIcon from '../images/legal.png'; 
import sosIcon from '../images/sos.png'; 
import rapeIcon from '../images/rape.png'; 
import suicideIcon from '../images/suicide.png'; 
import policeIcon from '../images/police.png'; 


import { FaArrowLeft, FaSearch, FaUserCircle, FaHome, FaUserMd, FaCalendarAlt, FaCogs } from 'react-icons/fa'; // Importing icons



function Telemedicine() {
  return (
    <div className="telemedicine-container">
      <Header />
      <div className="consultation-grid">
      <EmergencyGrids />
      </div>
      <FooterNavigation />
    </div>
  );
}

const Header = () =>(
  <div className="header">
    <div className="header-left">
      <button className="back-button">
        <FaArrowLeft />
      </button>
      <h1>Telemedicine Consultation</h1>
      </div>
    <div className="header-icons">
      <FaSearch className="icon" />
      <FaUserCircle className="icon" />
    </div>
  </div>

);

const EmergencyGrids = () =>{
  const emergencyItems = [
    { icon: sosIcon, title: 'NATIONWIDE EMERGENCY RESPONSE', phoneNumber: '10111 / 112' },
    { icon: ambulanceIcon, title: 'AMBULANCE', phoneNumber: '10 111' },
    { icon: policeIcon, title: 'POLICE', phoneNumber: '10111' },
    { icon: childlineIcon, title: 'CHILDLINE', phoneNumber: '080 005 5555' },
    { icon: suicideIcon, title: 'SUICIDE HELP', phoneNumber: '080 058 7567' },
    { icon: rapeIcon, title: 'RAPE CRISIS', phoneNumber: '021 447 9762' },
    { icon: legalIcon, title: 'LEGAL AID', phoneNumber: '080 110 110' },
  ];
  return (
    <div style={styless.gridContainer}>
      {emergencyItems.map((item, index) => (
        <EmergencyButton
          key={index}
          icon={item.icon}
          title={item.title}
          phoneNumber={item.phoneNumber}
        />
      ))}
    </div>)
};
const styless = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Adjust columns based on the layout
    gap: '20px',
    height: '650px',
    padding: '20px',
    
  },
};

const EmergencyButton = ({ icon, title, phoneNumber }) => {
  return (
    <div style={styles.buttonContainer}>
      <img src={icon} alt={title} style={styles.icon} />
      <div style={styles.textContainer}>
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.phoneNumber}>{phoneNumber}</p>
      </div>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0C4152', // Button background color
    padding: '10px',
    borderRadius: '25px',
    margin: '10px',
    textAlign: 'center',
    color: 'white',
    width: '123px',
    height: '123px'
  },
  icon: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '12px',
    margin: 0,
  },
  phoneNumber: {
    fontSize: '10px',
    margin: 0,
  },
};

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
export default Telemedicine;
