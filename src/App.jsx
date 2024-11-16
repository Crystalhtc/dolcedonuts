import React from 'react';
import "./App.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import PaymentReview from './pages/PaymentReview';
import CartPreview from './components/CartPreview/CartPreview';

function App() {
  const [cart, setCart] = useState(new Map());
  const [isCartPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  function addToCart(product, quantity) {
    console.log('Adding to cart:', product, 'Quantity:', quantity);
    const newCart = new Map(cart);
    newCart.set(product, (cart.get(product) || 0) + quantity);
    setCart(newCart);
    setIsPreviewOpen(true);

    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsPreviewOpen(false);
        setIsFadingOut(false); // Reset fade-out state
      }, 300); // Match the duration of the fade-out CSS transition
    }, 3000);
  }

  function computeCartSize() {
    return [...cart.values()].reduce((acc, quantity) => acc + quantity, 0);
  }
  
  const cartSize = computeCartSize();

  const clearCart = () => {
    setCart(new Map());
  };

  return (
    <Router>
      <Header cartSize={cartSize} onCartClick={() => setIsPreviewOpen(true)} />
      {isCartPreviewOpen && (
        <CartPreview
          cart={cart}
          cartSize={cartSize}
          onClose={() => setIsPreviewOpen(false)}
          isFadingOut={isFadingOut}
        />
      )}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/productdetails/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} cartSize={cartSize} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/paymentreview" element={<PaymentReview cart={cart} clearCart={clearCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
