import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.centeredContainer}>
        <h1 className={styles.mainTitle}>Contact Us</h1>
        
        <div className={styles.contactBlock}>
          <h2 className={styles.sectionTitle}>Head Office</h2>
          <address className={styles.address}>
            Read Us and Coordinate City,<br />
            Diamond, New York<br />
            Everett 3000, Nigeria<br /><br />
            +234 8234463333<br />
            +234 8448 640819
          </address>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.contactBlock}>
          <h2 className={styles.sectionTitle}>Send Us Message</h2>
          
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="fullname" className={styles.formLabel}>Fullname *</label>
              <input type="text" id="fullname" className={styles.formInput} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>Phone number *</label>
              <input type="tel" id="phone" className={styles.formInput} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email address *</label>
              <input type="email" id="email" className={styles.formInput} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Write message</label>
              <textarea id="message" rows="4" className={styles.formTextarea}></textarea>
            </div>
          </form>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.contactBlock}>
          <h3 className={styles.subsectionTitle}>Name Name</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <strong>Address</strong>
            </li>
            <li className={styles.contactItem}>
              <strong>Contact Us</strong>
            </li>
            <li className={styles.contactItem}>
              <strong>Contact Us</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;