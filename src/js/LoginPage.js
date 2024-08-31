import React from 'react';
import '../css/LoginPage.css';
import welcomeImage from '../images/login.png';
import { MdEmail, MdPerson, MdLock } from 'react-icons/md';

const Login = () => {
    return (
        <div className="login-page">
            <div className="header">
                <h1>Login</h1>
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
                        <MdLock className="input-icon" />
                        <span>|</span>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Create an Account</button>
                    <p className="login-link">Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;