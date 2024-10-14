import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'; 
import cartIcon from '../../assets/cart-icon.svg'; 

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/about">About</Link></li>
        <li className={styles.navItem}><Link to="/menu">Menu</Link></li>
        <li className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </li>
        <li className={styles.navItem}><Link to="/order">Order</Link></li>
        <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
        <li className={styles.navItem}>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

