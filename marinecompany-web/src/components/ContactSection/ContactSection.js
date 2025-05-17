import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setStatus(null); // Reset status on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.fullname || !formData.phone || !formData.email) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_pkudkz8", // Replace with your EmailJS service ID
        "template_jli652a", // Replace with your EmailJS template ID
        formData,
        "-L82RD_4F-6cajqXc" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ fullname: "", phone: "", email: "", message: "" });
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
      });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.centeredContainer}>
        <h1 className={styles.mainTitle}>Contact Us</h1>

        <div className={styles.contactBlock}>
          <h2 className={styles.sectionTitle}>Head Office</h2>
          <address className={styles.address}>
            Read Us and Coordinate City,
            <br />
            Diamond, New York
            <br />
            Everett 3000, Nigeria
            <br />
            <br />
            +234 8234463333
            <br />
            +234 8448 640819
          </address>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.contactBlock}>
          <h2 className={styles.sectionTitle}>Send Us Message</h2>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullname" className={styles.formLabel}>
                Fullname *
              </label>
              <input
                type="text"
                id="fullname"
                className={styles.formInput}
                value={formData.fullname}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>
                Phone number *
              </label>
              <input
                type="tel"
                id="phone"
                className={styles.formInput}
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email address *
              </label>
              <input
                type="email"
                id="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Write message
              </label>
              <textarea
                id="message"
                rows="4"
                className={styles.formTextarea}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div
                className={`${styles.statusMessage} ${
                  status.type === "success"
                    ? styles.successMessage
                    : styles.errorMessage
                }`}
              >
                {status.message}
              </div>
            )}
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