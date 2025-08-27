import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SU ACM</h3>
          <p>Seattle University's chapter of the Association for Computing Machinery</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/hacksu">HackSU</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <ul className="footer-links">
            <li><a href="https://discord.gg/suacm" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="mailto:acm@seattleu.edu">// checkemail@seattleu.edu</a></li>
            <li><a href="connectsu link" target="_blank" rel="noopener noreferrer">ConnectSU</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Location</h4>
          <p>Seattle University</p>
          <p>901 12th Ave</p>
          <p>Seattle, WA 98122</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 SU ACM. All rights reserved.</p>
        <p>Part of the Association for Computing Machinery</p>
      </div>
    </footer>
  );
};

export default Footer;
