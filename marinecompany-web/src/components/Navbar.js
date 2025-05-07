// src/components/Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Marine Parts & Diesel</div>
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#why">Why Choose Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
