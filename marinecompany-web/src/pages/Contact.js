// src/components/Contact.js
import React from 'react';
import '../styles/contact.css';
import MainLayout from './layout/MainLayout';

const Contact = () => {
  return (
    <MainLayout>
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We’re here to help you with your marine diesel engine needs.</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    </MainLayout>
  );
};

export default Contact;
