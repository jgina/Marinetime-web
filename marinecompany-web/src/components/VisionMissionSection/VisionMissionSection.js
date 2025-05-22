import React from 'react';
import styles from './VisionMissionSection.module.css';
import bourbonelogo from "../../assets/bourbonelogo.png";
import hylogo from "../../assets/hylogo.png";
import leasinglogo from "../../assets/leasinglogo.png";
import filogo from "../../assets/filogo.png";
import fairlogo from "../../assets/fairlogo.png";
import Tlogo from "../../assets/Tlogo.png";
import truckinglogo from "../../assets/truckinglogo.png";

const VisionMissionSection = () => {
  return (
    <div className={styles.container}>
      {/* Vision Section */}
      <section className={styles.section}>
        <div className={styles.icon}>
          <span role="img" aria-label="vision-symbol">🌟</span>
        </div>
        <h2 className={styles.headingVision}>Our Vision</h2>
        <p className={styles.textvision}>
         "To be African leading service provider of Cummins & diesel engine specialist and suppliers of original parts locally and internationally."
        </p>
      </section>

      {/* Mission Section */}
      <section className={styles.section2}>
        <div className={styles.icon}>
          <span role="img" aria-label="mission-target">🎯</span>
        </div>
        <h2 className={styles.headingMission}>Our Mission</h2>
        <p className={styles.textmission}>
          "To passionately carryout efficient service for all stake holders in all that regards Cummins engines, diesel engines and all sound proof generators."
        </p>
      </section>

      {/* Clients Section */}
<section className={styles.partnerSection}>
  <h3 className={styles.subHeading}>Our Partners</h3>
  <div className={styles.partnerLogo}>
  <img src={bourbonelogo} alt="Logo" />
          <img src={Tlogo} alt="Logo" />
          <img src={fairlogo} alt="Logo" />
          <img src={truckinglogo} alt="Logo" />
          <img src={leasinglogo} alt="Logo" />
          <img src={filogo} alt="Logo" />
          <img src={hylogo} alt="Logo" />
  </div>
</section>
    </div>
  );
};

export default VisionMissionSection;