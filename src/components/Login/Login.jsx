import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-header">
          <h1>Welcome Back!</h1>
          <p>Log in to continue your journey</p>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          
        </div>
        <div className="social-login">
          <p>Or log in with</p>
          <div className="social-icons">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
            <button className="social-btn apple">Apple</button>
            <br></br>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Login;
