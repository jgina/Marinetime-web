import React from 'react';
import styles from './VisionMissionSection.module.css';

const VisionMissionSection = () => {
  return (
    <div className={styles.container}>
      {/* Vision Section */}
      <div className={styles.section}>
        <div className={styles.icon}>
          {/* Placeholder for the vision icon (you can replace with an actual image or SVG) */}
          <span role="img" aria-label="vision-icon" style={{ fontSize: '40px' }}>
            👓
          </span>
        </div>
        <h2 className={styles.heading}>OUR VISION</h2>
        <p className={styles.text}>
          "To be the leading service provider of Cummins diesel engine spare parts locally and internationally."
        </p>
      </div>

      {/* Mission Section */}
      <div className={styles.section}>
        <div className={styles.icon}>
          {/* Placeholder for the mission icon (you can replace with an actual image or SVG) */}
          <span role="img" aria-label="mission-icon" style={{ fontSize: '40px' }}>
            🎯
          </span>
        </div>
        <h2 className={styles.heading}>OUR MISSION</h2>
        <p className={styles.text}>
          "To prominently carry out efficient service for all stakeholders in all that regards Cummins engines, diesel engines & all sound proof generators."
        </p>
      </div>

      {/* Clients Section */}
      <div className={styles.clientsSection}>
        <h3 className={styles.clientsHeading}>OUR CLIENTS</h3>
        <div className={styles.clientsLogos}>
          {/* Replace these with actual logo images */}
          <div className={styles.logo}>BOURBON</div>
          <div className={styles.logo}>TIDEWATER</div>
          <div className={styles.logo}>FAIRWAY</div>
          <div className={styles.logo}>TS</div>
          <div className={styles.logo}>GLOBE</div>
          <div className={styles.logo}>HydroDive</div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;