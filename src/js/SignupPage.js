import React from 'react';
import '../css/SignupPage.css';
// import welcomeImage from './WelcomeImage.jpg'; // Add your image here

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      {/* <img src={welcomeImage} alt="Welcome" className="welcome-image" /> */}
      <form className="signup-form">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Phone No" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Create an Account</button>
      </form>
      <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUpPage;
