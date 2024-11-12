import { NavLink } from 'react-router-dom'; 
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'; 
import cartIcon from '../../assets/cart-icon.svg'; 

export default function Header({ cartSize }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>About</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Menu</NavLink>
        </li>
        <li className={styles.logoContainer}>
          <NavLink to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/order" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Order</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Contact</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>
            <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
            {cartSize > 0 && <span className={styles.cartBadge}>{cartSize}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
