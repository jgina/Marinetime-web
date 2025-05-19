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

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.original}`}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoLink} onClick={closeMenu}>
          <img src={logo} alt="Maritime Logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <button className={styles.hamburger} onClick={toggleMenu}>
            <span className={styles.hamburgerIcon}>{isMenuOpen ? '✕' : '☰'}</span>
          </button>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
            {navLinks.map(({ path, label }) => (
              <li key={path} className={styles.navItem}>
                <Link
                  to={path}
                  className={`${styles.navLink} ${location.pathname === path ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Show this only on mobile menu */}
            <li className={`${styles.navItem} ${styles.mobileOnly}`}>
              <Link
                to="/contact"
                className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
                onClick={closeMenu}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        {/* Get in touch button for large screens */}
        <div className={styles.buttonContainer}>
          <Link
            to="/contact"
            className={`${styles.navLinkButton} ${location.pathname === '/contact' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
