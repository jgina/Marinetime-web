// src/components/HeroSection.js
import React from 'react';
import '../styles/heroSection.css';
import heroBackground from '../assets/hero-background.jpg'; // Your actual hero image path

const HeroSection = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Specialists in Cummins & Diesel Engine Repairs</h1>
          <p>Local Expertise. Global Reach.</p>
          <a href="#services" className="hero-btn">Explore Services</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
