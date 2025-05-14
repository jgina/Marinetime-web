import React from 'react';
import styles from './ContactPage.module.css';
import contactHero from '../../assets/heroimage1.png';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <section className={styles.heroSection} style={{ backgroundImage: `url(${contactHero})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroText}>We're here to answer your maritime questions</p>
        </div>
      </section>
      
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.sectionText}>
                Have questions about our services or need a quote? Reach out to our team—we're happy to help.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Address</h3>
                  <p>123 Ocean Drive<br />Maritime City, MC 12345</p>
                </div>
                <div className={styles.contactItem}>
                  <h3>Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
                <div className={styles.contactItem}>
                  <h3>Email</h3>
                  <p>info@maritime.com</p>
                </div>
                <div className={styles.contactItem}>
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
          
          <div className={styles.mapSection}>
            <h2 className={styles.sectionTitle}>Our Location</h2>
            <div className={styles.mapContainer}>
              {/* In a real implementation, you would embed a Google Map or similar here */}
              <div className={styles.mapPlaceholder}>
                <p>Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;