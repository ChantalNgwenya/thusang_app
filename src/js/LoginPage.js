import React from 'react';
import '../css/LoginPage.css';
// import welcomeImage from './WelcomeImage.jpg'; // Add your image here

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      {/* <img src={welcomeImage} alt="Welcome" className="welcome-image" /> */}
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create an Account</button>
      </form>
      <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default LoginPage;
