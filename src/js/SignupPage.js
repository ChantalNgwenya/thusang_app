import React from 'react';
import '../css/SignupPage.css';
import welcomeImage from '../images/signup.png'; // Ensure this path is correct
import { MdEmail, MdPerson, MdPhone, MdLock } from 'react-icons/md';

const SignUp = () => {
    return (
        <div className="phone-screen">
            <div className="signup-page">
                <div className="header">
                    <h1>Sign up</h1>
                </div>
                <div className="welcome-image">
                    <img src={welcomeImage} alt="Welcome" />
                </div>
                <div className="blue-container">
                    <form>
                        <div className="input-group">
                            <MdEmail className="input-icon" />
                            <span>|</span>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-group">
                            <MdPerson className="input-icon" />
                            <span>|</span>
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="input-group">
                            <MdPhone className="input-icon" />
                            <span>|</span>
                            <input type="text" placeholder="Phone No" required />
                        </div>
                        <div className="input-group">
                            <MdLock className="input-icon" />
                            <span>|</span>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="input-group">
                            <MdLock className="input-icon" />
                            <span>|</span>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit">Create an Account</button>
                        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
