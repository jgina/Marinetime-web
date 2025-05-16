import React from "react";
import styles from "./AboutPage.module.css";
import aboutHero from "../../assets/about1.png"; // Your hero image
import VisionMissionSection from "../../components/VisionMissionSection/VisionMissionSection";
import IdentityCard from "../../components/IdentityCard/IdentityCard";
import chooseUsImage from "../../assets/whychooseus.png";

const AboutPage = () => {
  const values = [
    {
      title: "Reliability",
      description: "We deliver what we promise. You can count on us to keep your engines running."
    },
    {
      title: "Expertise",
      description: "With deep knowledge of diesel engines and Cummins systems, our team brings skill and precision to every repair and supply job."
    },
    {
      title: "Integrity",
      description: "We believe in honest work, fair pricing, and transparency in everything we do. Trust is the foundation of our business."
    },
    {
      title: "Customer Commitment",
      description: "We put our clients first – offering responsive service, and long-term support that goes beyond a single transaction."
    },
    {
      title: "Quality",
      description: "We provide only high-quality parts and workmanship. Whether it’s a repair or a replacement, we never cut corners."
    },
    {
      title: "Safety First",
      description: "In all our operations, safety is non-negotiable. We follow strict standards to protect our team, our clients, and the environment."
    },
    {
      title: "Continuous Improvement",
      description: "We stay updated with the latest in marine and diesel technology so we can serve our clients better and stay ahead in the industry."
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Professional Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img 
            src={aboutHero} 
            alt="Marine Parts and Diesel Service" 
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>About Us</h1>
            <div className={styles.breadcrumb}>Home > About Us</div>
          </div>
        </div>
      </section>

      {/* Removed divider */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Our History</h2>
        <p className={styles.paragraph}>
          Marine Parts and Diesel Service Limited emerged in 2015, located at 124 Old Alba Road Rumuagba, Port Harcourt, Rivers State. After which we relocated to our new office at New Refinery Road Elelenwo, Port Harcourt, Rivers State at Sworno House. We are currently operating from Road 1 and No.3 Odani Green City.
        </p>
        <p className={styles.paragraph}>
          Our company engineers are trained by Cummins West Africa, headed by Engineer Sarakino, a Cummins specialist covering Africa.
        </p>
      </section>

      {/* Removed divider */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Who Are We</h2>
        {/* Content for "Who Are We" would go here */}
      </section>

      <section className={styles.whyChooseUsSection}>
        <div className={styles.whyChooseUsContainer}>
          <div className={styles.whyImage}>
            <img src={chooseUsImage} alt="Why Choose Us" />
          </div>
          <div className={styles.whyText}>
            <h2>Why Choose Us?</h2>
            <p>
              At Marine Parts and Diesel Service Limited, we know how important it
              is to keep your engines running smoothly.
            </p>
            <p>Here’s why people trust us:</p>
            <ul>
              <li>We specialize in marine and diesel engines, especially Cummins, so we know them inside and out.</li>
              <li>Our team is experienced, friendly, and ready to help with any engine problem.</li>
              <li>We use only good-quality parts that you can count on.</li>
              <li>We work quickly and do the job right the first time.</li>
              <li>Most of all we care about our customers, and always give them honest and reliable service.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <IdentityCard />
      </section>

      <section>
        <VisionMissionSection />
      </section>

      {/* Removed divider */}
      <section className={styles.coreValuesSection}>
        <div className={styles.coreValuesContent}>
          <div className={styles.coreValuesHeader}>
            <h2 className={styles.coreValuesSubtitle}>What Makes Us Different</h2>
            <h1 className={styles.coreValuesTitle}>Our Core Values</h1>
            <p className={styles.coreValuesIntro}>
              At Marine Parts and Diesel Services Limited, our success comes from staying true to the values that guide how we work every day, which are:
            </p>
          </div>
          <ul className={styles.valuesList}>
            {values.map((value, index) => (
              <li key={index}>
                <span className={styles.valueTitle}>{value.title}:</span> {value.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;