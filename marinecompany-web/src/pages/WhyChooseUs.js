// src/components/WhyChooseUs.js
import React from 'react';
import '../styles/whyChooseUs.css';
import expertIcon from '../assets/expert-icon.png';
import qualityIcon from '../assets/quality-icon.png';
import supportIcon from '../assets/support-icon.png';
import MainLayout from './layout/MainLayout';

const WhyChooseUs = () => {
  return (
    <MainLayout>
    <section className="why-choose" id="why">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="reasons-container">
        <div className="reason-card fade-in">
          <img src={expertIcon} alt="Expert Technicians" />
          <h3>Expert Technicians</h3>
          <p>Our certified diesel specialists provide precision repairs and diagnostics with decades of hands-on experience.</p>
        </div>
        <div className="reason-card fade-in delay">
          <img src={qualityIcon} alt="Quality Assurance" />
          <h3>Quality Assurance</h3>
          <p>We use only genuine parts and maintain the highest standards in marine engine repair services.</p>
        </div>
        <div className="reason-card fade-in delay2">
          <img src={supportIcon} alt="24/7 Support" />
          <h3>24/7 Global Support</h3>
          <p>Our support team ensures rapid response times and on-site service when it matters most.</p>
        </div>
      </div>
    </section>
    </MainLayout>
  );
};

export default WhyChooseUs;
