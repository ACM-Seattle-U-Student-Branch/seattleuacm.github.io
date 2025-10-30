import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo section - now clickable */}
        <Link to="/" className="logo-section">
          <img src="/acm_logo.png" alt="ACM Logo" className="header-logo" />
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
          >
            Events
          </Link>
          <Link 
            to="/hacksu" 
            className={`nav-link ${location.pathname === '/hacksu' ? 'active' : ''}`}
          >
            HackSU
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
