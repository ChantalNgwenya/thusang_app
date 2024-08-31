import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../css/WelcomePage.css';
import logo from '../images/Thusang-logo.jpg'; 

const WelcomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numDots = 3;

  const welcomeMessages = [
    'Lotjhani! 😊',
    'Welkom! 😊',
    'Amogela! 😊',
    'Kamohelo! 😊',
    'Karibu! 😊',
    'Wamkelekile! 😊',
    'Dumelang! 😊',
    'Welcome! 😊',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(intervalId);
  }, [welcomeMessages.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleMessages = welcomeMessages.slice(
    currentIndex - (currentIndex % numDots),
    currentIndex - (currentIndex % numDots) + numDots
  );

  return (
    <div className="phone-screen">
    <div className="welcome-container">
      <img src={logo} alt="Thusang Logo" className="logo" />
      <h1>Welcome to Thusang</h1>
      <p className="scrolling-message">{welcomeMessages[currentIndex]}</p>
      <div className="dots-container">
        {visibleMessages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex % numDots ? 'active' : ''}`}
            onClick={() => handleDotClick((currentIndex - currentIndex % numDots) + index)}
          ></span>
        ))}
      </div>
        <button className="account-button">Create an Account</button>
      <button className="login-button">Login</button>
    </div>
    </div>
  );
};

export default WelcomePage;
