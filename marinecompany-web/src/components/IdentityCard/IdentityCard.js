import React from "react";
import styles from "./IdentityCard.module.css";

const IdentityCard = () => {
  return (
    <section className={styles.identitySection}>
      <p className={styles.heading}>
        Your Trusted Partner in all Marine Parts , <br></br>Cummins engines & diesel engines
      </p>
      <h4 className={styles.description}>
        Marine Parts and Diesel Service Limited is a trusted specialist in
        marine engine repair, offering expert services for Cummins and other
        diesel engines. With deep industry experience, they provide reliable
        maintenance, diagnostics, and parts to keep marine vessels running
        smoothly and efficiently.
      </h4>
    </section>
  );
};

export default IdentityCard;
