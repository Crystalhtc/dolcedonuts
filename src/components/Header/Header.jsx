import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'; 
import cartIcon from '../../assets/cart-icon.svg';
import hamburgerIcon from '../../assets/hamburger-icon.svg';

export default function Header({ cartSize }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navContainerRef.current && 
        !navContainerRef.current.contains(event.target) && 
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav 
      ref={navContainerRef}
      className={`${styles.nav} ${isMenuOpen ? styles.expanded : ''}`}
    >
      <div className={styles.navContainer}>
        <div className={styles.hamburgerContainer} onClick={toggleMenu}>
          <img 
            src={hamburgerIcon} 
            alt={isMenuOpen ? "Close Menu" : "Open Menu"} 
            className={styles.hamburgerIcon} 
          />
        </div>
        
        <div className={styles.desktopNavLeft}>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
          >
            About
          </NavLink>
          <NavLink 
            to="/order" 
            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
          >
            Order
          </NavLink>
        </div>
        
        <NavLink to="/" className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>
        
        <div className={styles.desktopNavRight}>
          <NavLink 
            to="/reviews" 
            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
          >
            Reviews
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
          >
            Contact
          </NavLink>
        </div>
        
        <NavLink to="/cart" className={styles.cartContainer}>
          <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
          {cartSize > 0 && <span className={styles.cartBadge}>{cartSize}</span>}
        </NavLink>
        
        <ul className={`${styles.mobileNavList} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li className={styles.navItem}>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/order" 
              className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
              onClick={toggleMenu}
            >
              Order
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/reviews" 
              className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
              onClick={toggleMenu}
            >
              Reviews
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}