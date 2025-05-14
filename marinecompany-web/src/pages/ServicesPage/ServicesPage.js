import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesPage.module.css';
import servicesHero from '../../assets/getintouchhero.png';
// Placeholder images for service sections (replace with actual images)
import generatorImage from '../../assets/ourservices1.png';
import sparePartsImage from '../../assets/ourservicespageimage2.png';
import vesselImage from '../../assets/ourservices3.png';
import materialsImage from '../../assets/getintouch.png';
import maintenanceImage from '../../assets/ourservicespageimage5.png';
import supplyImage from '../../assets/ourservicespageimage6.png';
import offshoreImage from '../../assets/ourservicespageimage7.png';

const ServicesPage = () => {
  const services = [
    {
      title: "Professional in all Cummins, Diesel & Sound Proof Generators",
      image: generatorImage,
      imageAlt: "Cummins Diesel Generator",
      imageOnLeft: true,
    },
    {
      title: "Diesel Engine Spare Parts Sales",
      image: sparePartsImage,
      imageAlt: "Diesel Engine Spare Parts",
      imageOnLeft: false,
    },
    {
      title: "Marine Vessel Technical Management",
      image: vesselImage,
      imageAlt: "Marine Vessel",
      imageOnLeft: true,
    },
    {
      title: "Provision of Quality Services & Materials",
      image: materialsImage,
      imageAlt: "Quality Services and Materials",
      imageOnLeft: false,
    },
    {
      title: "Maintenance & Repairs of Cummins and Diesel Engines",
      image: maintenanceImage,
      imageAlt: "Engine Maintenance",
      imageOnLeft: true,
    },
    {
      title: "Supply & Purchase of all Cummins Parts",
      image: supplyImage,
      imageAlt: "Cummins Parts Supply",
      imageOnLeft: false,
    },
    {
      title: "Offshore & Onshore Operation (Service)",
      image: offshoreImage,
      imageAlt: "Offshore Operation",
      imageOnLeft: true,
    },
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.heroSection} style={{ backgroundImage: `url(${servicesHero})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>OUR SERVICES</h1>
          <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
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

          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceRow} ${service.imageOnLeft ? styles.imageLeft : styles.imageRight}`}
            >
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.imageAlt} />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;