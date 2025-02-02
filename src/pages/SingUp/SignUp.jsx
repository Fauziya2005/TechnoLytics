import React from "react";
import Google_Icons from '../../assets/Google_Icons.png'
import "./signup.css";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        
        <h2>Welcome To TechnoLytics</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" autoComplete="user" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" autoComplete="email" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" autoComplete="new-password" required />


          
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" autoComplete="new-password" required />

          <button type="submit" className="signup-btn">
            Signup
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
          Signup with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
