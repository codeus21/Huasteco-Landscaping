import React from 'react';
import huastecoLogo from '../assets/Logos/HuastecoLogo.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={huastecoLogo} alt="Huasteco Landscape & Lawncare LLC" className="footer-logo-image" />
            </div>
            <p>Your trusted landscaping partner for beautiful outdoor spaces and expert lawn care.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://facebook.com/huastecolandscape" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 (706) 809-8741</p>
            <p>📍 Douglasville & Surrounding Cities</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Huasteco Landscape & Lawncare LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
