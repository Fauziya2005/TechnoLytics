import React from "react";
import "./Footer.css";
import logo from '../../assets/T-logo.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ＴｅｃｈｎｏＬｙｔｉｃｓ<sup>®</sup></h2>
          <p className="footer-subtitle">Take IT Easy</p>
          <p className="footer-description">
          Our cutting-edge curriculum is designed to empower students
           with the knowledge, skills and experiences needed to excel in the dynamic field of education.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-icon">🐦</a>
            <a href="#" className="footer-icon">📸</a>
            <a href="#" className="footer-icon">🔗</a>
            <a href="#" className="footer-icon">▶️</a>
            <a href="#" className="footer-icon">📘</a>
          </div>
        </div>

        {/* Company Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li className="footer-link"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className="footer-link"><Link to='card' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li className="footer-link"><Link to='about' smooth={true} offset={-130} duration={500}>About us</Link></li>
            <li className="footer-link"><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>© Copyright 2025, All Rights Reserved By TechnoLytics</p>
      </div>
    </footer>
  );
};

export default Footer;
