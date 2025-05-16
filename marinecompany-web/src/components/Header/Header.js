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
      if (location.pathname === '/') {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (location.pathname === '/' && !isScrolled) {
      setIsScrolled(true);
    }
  };

  const handleLinkClick = (to) => {
    if (to !== '/') {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }
    setIsMenuOpen(false);
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
              <Link
                to="/"
                className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/about"
                className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
                onClick={() => handleLinkClick('/about')}
              >
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/services"
                className={`${styles.navLink} ${location.pathname === '/services' ? styles.active : ''}`}
                onClick={() => handleLinkClick('/services')}
              >
                Our Services
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <Link
            to="/contact"
            className={`${styles.navLinkButton} ${location.pathname === '/contact' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;