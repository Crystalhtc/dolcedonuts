import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>{/*change it into our logo later*/}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">&#128722;</Link></li>{/*can change the icon later*/}
      </ul>
    </nav>
  );
}