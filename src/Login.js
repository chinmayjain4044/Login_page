import React from 'react';
import './Login.css';
import welcomeImage from './assets/data.png';

function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <div className="left-section">
          <img src={welcomeImage} alt="Real-time Data Tracking" className="welcome-image" />
          <h2>Real-time Data Tracking</h2>
          <p>Instantly capture and access therapy data with auto-save and real-time insights.</p>
          <div className="indicator-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="right-section">
          <div className="login-box">
            <h2>Welcome Back!</h2>
            <p>Sign in with your email address and password.</p>
            <form>
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <div className="forgot-password">
                <a href="/">Forgot Password?</a>
              </div>
              <p className="terms">
                By logging in you agree to the terms of service.
              </p>
              <button type="submit" className="login-button">Login</button>
              
            </form>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2024 IrisInsights, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
