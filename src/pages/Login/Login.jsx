import React, { useState } from "react";
//import logo from '../../assets/T-logo.png'
import Google_Icons from '../../assets/Google_Icons.png'
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome To TechnoLytics</h2>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
          
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              👁️
            </span>
          </div>

          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">
          <hr /> <span>Or</span> <hr />
        </div>

        <button className="google-btn">
          <img
            src={Google_Icons}
            alt="Google Logo"
            className="google-icon"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
