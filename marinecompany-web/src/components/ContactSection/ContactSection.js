import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt } from "react-icons/fa"; // Added import
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
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.phone || !formData.email) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_pkudkz8",
        "template_jli652a",
        formData,
        "-L82RD_4F-6cajqXc"
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ fullname: "", phone: "", email: "", message: "" });
        },
        () => {
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.centeredContainer}>
        <h1 className={styles.mainTitle}>Contact Us</h1>

        <div className={styles.contactBlock}>
          <h2 className={styles.sectionTitle}>Head Office</h2>
          <address className={styles.address}>
            Road 1, Plot 3 Odani Green City,
            <br />
            Elelenwo, Port Harcourt,
            <br />
            Rivers State, Nigeria.
            <br />
            <br />
            +234 8034608291
            <br />
            +234 8056430189
          </address>

          {/* Google Maps Icon Link */}
          <a
            href="https://www.google.com/maps?q=Road+1,+Plot+3+Odani+Green+City,+Elelenwo,+Port+Harcourt,+Rivers+State,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <FaMapMarkerAlt className={styles.mapIcon} />
            <span className={styles.mapText}>Open in Google Maps</span>
          </a>
        </div>

        <div className={styles.contactBlock1}>
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
      </div>
    </section>
  );
};

export default ContactSection;
