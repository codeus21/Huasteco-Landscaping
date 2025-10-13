import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import huastecoLogo from '../assets/Logos/HuastecoLogo.jpg';
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
              <img src={huastecoLogo} alt="Huasteco Landscape & Lawncare LLC" className="logo-image" />
            </Link>
          </div>
          
          <div className="call-section">
            <span className="call-text">Call:</span>
            <a href="tel:7068098741" className="call-number">(706) 809-8741</a>
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
                <li><Link to="/service1" className="dropdown-link" onClick={closeMenu}>Lawn Care & Maintenance</Link></li>
                <li><Link to="/service2" className="dropdown-link" onClick={closeMenu}>Landscape Design & Installation</Link></li>
                <li><Link to="/service3" className="dropdown-link" onClick={closeMenu}>Hardscaping & Outdoor Features</Link></li>
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
