import React from 'react';
import './FormPage.css';
import { FaArrowLeft, FaHome, FaUserMd, FaCalendarAlt, FaCogs } from 'react-icons/fa'; // Importing icons

function FormPage(){
  return (
    <div className="page-container">
      <Header />
    <div className="form-grid">
    <Form />
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
      </div>
    <button className="closeButton">X</button>
  </div>);


const Form = () => {
  return (
    <div className="container">
      

      <div className="formContainer">
        <h2 className="formHeader">Please fill in your details</h2>

        <form>
          <div className="formGroup">
            <label className="label">Name:</label>
            <input type="text" className="input" />
          </div>

          <div className="formGroup">
            <label className="label">Surname:</label>
            <input type="text" className="input" />
          </div>

          <div className="formGroup">
            <label className="label">SA ID Number:</label>
            <input type="text" className="input" />
          </div>

          <div className="formGroup">
            <label className="label">Contact Number:</label>
            <input type="text" className="input" />
          </div>

          <div className="formGroup">
            <label className="label">Physical Address:</label>
            <input type="text" className="input" />
          </div>

          <div className="formGroup">
            <label className="label">Race:</label>
            <input type="text" className="input" />
          </div>

          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>

      
    </div>
  );
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




export default FormPage;
