import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src="https://via.placeholder.com/200x80/1A202C/FFFFFF?text=Your+Logo" alt="Company Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className="call-section">
            <span className="call-text">Call:</span>
            <a href="tel:5555555555" className="call-number">(555) 555-5555</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link></li>
            <li className="dropdown-container">
              <button 
                className="nav-link dropdown-toggle" 
                onClick={toggleServicesDropdown}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                Services
                <span className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}>
                <li><Link to="/services" className="dropdown-link" onClick={closeMenu}>All Services</Link></li>
                <li><Link to="/service1" className="dropdown-link" onClick={closeMenu}>Service One</Link></li>
                <li><Link to="/service2" className="dropdown-link" onClick={closeMenu}>Service Two</Link></li>
                <li><Link to="/service3" className="dropdown-link" onClick={closeMenu}>Service Three</Link></li>
              </ul>
            </li>
            <li><Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
