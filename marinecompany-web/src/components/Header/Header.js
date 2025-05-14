import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/mainlogo.png';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set header state based on the current page
    if (location.pathname !== '/') {
      setIsScrolled(true); // Retain scrolled state on non-home pages
    } else {
      setIsScrolled(window.scrollY > 50); // Reset to scroll-based state on home page
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (to) => {
    if (to !== '/') {
      setIsScrolled(true); // Set scrolled state for non-home pages
    } else {
      setIsScrolled(false); // Reset to unscrolled state for home page
    }
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoLink} onClick={() => handleLinkClick('/')}>
          <img src={logo} alt="Maritime Logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <button className={styles.hamburger} onClick={toggleMenu}>
            <span className={styles.hamburgerIcon}>{isMenuOpen ? '✕' : '☰'}</span>
          </button>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink} onClick={() => handleLinkClick('/')}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink} onClick={() => handleLinkClick('/about')}>About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/services" className={styles.navLink} onClick={() => handleLinkClick('/services')}>Our Services</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <Link to="/contact" className={styles.navLinkButton} onClick={() => handleLinkClick('/contact')}>Get in touch</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;