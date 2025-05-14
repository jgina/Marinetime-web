import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactPage.module.css';
import contactHero from '../../assets/getintouchhero.png';
import ContactSection from '../../components/ContactSection/ContactSection';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <section className={styles.heroSection} style={{ backgroundImage: `url(${contactHero})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>GET IN TOUCH</h1>
          <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}> > </span>
            <span className={styles.breadcrumbCurrent}>Get In Touch</span>
          </nav>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>>> Get In Touch With Us</h2>
          <p className={styles.sectionText}>
            Contact us today to discuss how Marine Parts & Diesel Services Limited can be of help to you.
          </p>
        </div>
      </section>
      
    <section>
    <ContactSection />
    </section>
      
    </div>
  );
};

export default ContactPage;