// src/components/Services.js
import React from 'react';
import '../styles/service.css';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import MainLayout from './layout/MainLayout';

const Services = () => {
  return (
    <MainLayout>
    <section className="services-section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card fade-in">
          <img src={service1} alt="Engine Overhaul" />
          <h3>Engine Overhaul</h3>
          <p>Comprehensive diesel engine rebuilds for peak performance and longevity.</p>
        </div>
        <div className="service-card fade-in delay">
          <img src={service2} alt="Diagnostics" />
          <h3>Engine Diagnostics</h3>
          <p>Advanced diagnostic tools for fast, accurate fault detection and repair.</p>
        </div>
        <div className="service-card fade-in delay2">
          <img src={service3} alt="Marine Service" />
          <h3>Marine Maintenance</h3>
          <p>Scheduled marine diesel servicing to keep your fleet operating smoothly.</p>
        </div>
      </div>
    </section>
    </MainLayout>
  );
};

export default Services;
