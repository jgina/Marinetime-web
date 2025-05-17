import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesPage.module.css';
import servicesHero from '../../assets/getintouchhero.png';
import generatorImage from '../../assets/ourservices1.png';
import sparePartsImage from '../../assets/ourservicespageimage2.png';
import vesselImage from '../../assets/ourservices3.png';
import materialsImage from '../../assets/whychooseus.png';
import maintenanceImage from '../../assets/ourservicespageimage5.png';
import supplyImage from '../../assets/ourservicespageimage6.png';
import offshoreImage from '../../assets/ourservicespageimage7.png';

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.heroSection} style={{ backgroundImage: `url(${servicesHero})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>OUR SERVICES</h1>
          <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}> > </span>
            <span className={styles.breadcrumbCurrent}>Our Services</span>
          </nav>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.sectionText}>
            Marine Parts and Diesel Service Limited offer a comprehensive range of services, handling everything from routine maintenance to complex repairs. These services include:
          </p>

          {/* Service 1: Generators */}
          <div
            className={`${styles.serviceRow} ${styles.imageLeft} ${styles.serviceRow1}`}
            style={{ backgroundColor: '#f0f8ff' }} // Example: Light blue background
          >
            <div className={styles.serviceImage}>
              <img src={generatorImage} alt="Cummins Diesel Generator" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>
                Professional in all Cummins, Diesel & Sound Proof Generators
              </h3>
            </div>
          </div>

          {/* Service 2: Spare Parts */}
          <div
            className={`${styles.serviceRow} ${styles.imageRight} ${styles.serviceRow2}`}
            style={{ backgroundColor: '#fff5f5' }} // Example: Light red background
          >
            <div className={styles.serviceImage}>
              <img src={sparePartsImage} alt="Diesel Engine Spare Parts" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Diesel Engine Spare Parts Sales</h3>
            </div>
          </div>

          {/* Service 3: Vessel Management */}
          <div
            className={`${styles.serviceRow} ${styles.imageLeft} ${styles.serviceRow3}`}
            style={{ backgroundColor: '#f5fff5' }} // Example: Light green background
          >
            <div className={styles.serviceImage}>
              <img src={vesselImage} alt="Marine Vessel" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Marine Vessel Technical Management</h3>
            </div>
          </div>

          {/* Service 4: Materials */}
          <div
            className={`${styles.serviceRow} ${styles.imageRight} ${styles.serviceRow4}`}
            style={{ backgroundColor: '#fffaf0' }} // Example: Light yellow background
          >
            <div className={styles.serviceImage}>
              <img src={materialsImage} alt="Quality Services and Materials" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Provision of Quality Services & Materials</h3>
            </div>
          </div>

          {/* Service 5: Maintenance */}
          <div
            className={`${styles.serviceRow} ${styles.imageLeft} ${styles.serviceRow5}`}
            style={{ backgroundColor: '#f0fff0' }} // Example: Another light green
          >
            <div className={styles.serviceImage}>
              <img src={maintenanceImage} alt="Engine Maintenance" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>
                Maintenance & Repairs of Cummins and Diesel Engines
              </h3>
            </div>
          </div>

          {/* Service 6: Supply */}
          <div
            className={`${styles.serviceRow} ${styles.imageRight} ${styles.serviceRow6}`}
            style={{ backgroundColor: '#f5f5ff' }} // Example: Light purple
          >
            <div className={styles.serviceImage}>
              <img src={supplyImage} alt="Cummins Parts Supply" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Supply & Purchase of all Cummins Parts</h3>
            </div>
          </div>

          {/* Service 7: Offshore Operations */}
          <div
            className={`${styles.serviceRow} ${styles.imageLeft} ${styles.serviceRow7}`}
            style={{ backgroundColor: '#e6f3ff' }} // Example: Another light blue
          >
            <div className={styles.serviceImage}>
              <img src={offshoreImage} alt="Offshore Operation" />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Offshore & Onshore Operation (Service)</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;