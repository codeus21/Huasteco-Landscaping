import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="https://via.placeholder.com/200x80/1A202C/FFFFFF?text=Your+Logo" alt="Company Logo" className="footer-logo-image" />
            </div>
            <p>Your trusted local business for quality services and solutions.</p>
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
              <li><a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 (555) 555-5555</p>
            <p>📧 info@yourcompany.com</p>
            <p>📍 123 Main Street, Your City, ST 12345</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
