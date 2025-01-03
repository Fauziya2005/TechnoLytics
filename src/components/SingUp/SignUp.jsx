import React from 'react';
import './signup.css';

function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-header">
          <h1>Create Your Account</h1>
          <p>Join us and start your journey today</p>
        </div>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <input type="password" placeholder="Confirm Password" className="input-field" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
