import React from "react";
import styles from "./HomePage.module.css";
import homeHero from "../../assets/heroimage.png";
import bourbonelogo from "../../assets/bourbonelogo.png";
import hylogo from "../../assets/hylogo.png";
import leasinglogo from "../../assets/leasinglogo.png";
import filogo from "../../assets/filogo.png";
import fairlogo from "../../assets/fairlogo.png";
import Tlogo from "../../assets/Tlogo.png";
import truckinglogo from "../../assets/truckinglogo.png";
import IdentityCard from "../../components/IdentityCard/IdentityCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import chooseUsImage from "../../assets/whychooseus.png";
import ContactSection from "../../components/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitlespecial}>Specialists</span> in Cummins & Diesel Engine Repairs:
          </h1>
          <p className={styles.heroText}>Local Expertise, Global Reach...</p>
          <p className={styles.heroText1}>
            We specialize in the maintenance, repair, and overhaul of all
            Cummins and diesel engine models, delivering dependable service for
            marine, industrial, and commercial clients worldwide.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.heroButton}>Explore Our Services</button>
            <button className={styles.heroButton}>Contact Our Team</button>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.partnerlogo}>
          <img src={bourbonelogo} alt="Logo" />
          <img src={Tlogo} alt="Logo" />
          <img src={fairlogo} alt="Logo" />
          <img src={truckinglogo} alt="Logo" />
          <img src={leasinglogo} alt="Logo" />
          <img src={filogo} alt="Logo" />
          <img src={hylogo} alt="Logo" />
        </div>
      </section>

      <section>
        <IdentityCard />
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

      <section className={styles.serviceSection}>
        <ServiceCard
          image={bourbonelogo}
          title="Maintenance and Repair all Cummins Engines"
        />
        {/* <ServiceCard
          image={bourbonelogo}
          title="Provision of Quality Services & Materials"
        />
        <ServiceCard
          image={bourbonelogo}
          title="Offshore and Onshore Operation (Service)"
        /> */}
        {/* <button className={styles.seeMoreButton}>See More</button> */}
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;