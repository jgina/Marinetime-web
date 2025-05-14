import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>MARINE PARTS & DIESEL SERVICES LIMITED</h3>
          <p className={styles.footerText}>
            Marine Parts & Diesel Services Limited is a servicing company that deals with provision of all Cummins engine, diesel engines, standardized sound proof generator locally and internationally. We also deals with supplying, purchasing and maintenance of Cummins engines and all parts. We offer range of services to ensure high efficiency and compliance for our client satisfaction.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>USEFUL LINKS</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>CONTACT US</h3>
          <address className={styles.footerText}>
            Road 1, Plot 3 Odani Green City,<br />
            Elelenwo, Port Harcourt,<br />
            Rivers State, Nigeria<br />
            info@marinepdsvr.com.ng<br />
            +234 8034608291<br />
            +234 8056430189
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;