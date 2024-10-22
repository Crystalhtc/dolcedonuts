import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'; 
import logo from '../assets/logo.png'; // Assuming you have a logo image

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <button className={styles.hamburger} onClick={toggleMenu}>
                &#9776; {/* Unicode for hamburger icon */}
            </button>
            <ul className={`${styles.navList} ${isOpen ? styles.expanded : ''}`}>
                <li className={styles.navItem}>
                    <NavLink to="/" activeClassName={styles.activeLink}>Home</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/menu" activeClassName={styles.activeLink}>Menu</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/about" activeClassName={styles.activeLink}>About Us</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/contact" activeClassName={styles.activeLink}>Contact</NavLink>
                </li>
            </ul>
        </header>
    );
}
