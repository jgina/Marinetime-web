import React from "react";
import styles from "./ServiceCard.module.css";
import getintouch from "../../assets/getintouch.png";
import ourservices1 from "../../assets/ourservices1.png";
import ourservices3 from "../../assets/ourservices3.png";

const ServiceCard = () => {
  return (
    <section className={styles.serviceSection}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <div className={styles.card}>
            <img src={getintouch} alt="Maintenance" className={styles.image} />
            <p className={styles.serviceText}>Maintenance and Repair all Cummins Engines</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.card}>
            <img src={ourservices1} alt="Quality Services" className={styles.image} />
            <p className={styles.serviceText}>Provision of Quality Services & Materials</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.card}>
            <img src={ourservices3} alt="Offshore Services" className={styles.image} />
            <p className={styles.serviceText}>Offshore and Onshore Operation (Service)</p>
          </div>
        </div>
      </div>
      <button className={styles.seeMoreBtn}>See More</button>
    </section>
  );
};

export default ServiceCard;