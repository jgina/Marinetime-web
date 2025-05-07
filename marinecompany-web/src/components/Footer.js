// src/components/Footer.js
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>MarinePartsCo</h2>
          <p>Reliable marine engine solutions with over 25 years of excellence.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@marinepartsco.com</p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MarinePartsCo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
