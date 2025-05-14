import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Maritime Services</h3>
          <p className={styles.footerText}>Providing excellence in maritime solutions since 1995.</p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact Info</h3>
          <address className={styles.footerText}>
            123 Ocean Drive<br />
            Maritime City, MC 12345<br />
            Phone: (123) 456-7890<br />
            Email: info@maritime.com
          </address>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Maritime Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;