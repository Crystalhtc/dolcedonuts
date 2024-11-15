import React from 'react';
import styles from './CartPreview.module.css';
import { NavLink } from 'react-router-dom';

export default function CartPreview({ cart, setCart, cartSize, onClose }) {
    
    const handleRemove = (product) => {
        const newCart = new Map(cart);
        newCart.delete(product); // Completely remove the product from the cart
        setCart(newCart); // Update the cart state
    };
    
    const subtotal = [...cart.entries()].reduce((total, [product, quantity]) => {
        return total + (product.price * quantity);
    }, 0).toFixed(2);

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.heading}>
                    <h2 className={styles.cartSizeText}>{cartSize} items</h2>
                    <button className={styles.closeButton} onClick={onClose}>&times;</button>
                </div>
                <div className={styles.items}>
                    {[...cart.entries()].map(([product, quantity]) => (
                        <div key={product.id} className={styles.singleItem}>
                            <img src={product.image_url} alt={product.name} />
                            <div className={styles.info}>
                                <p className={styles.cartProductText}>{product.name}</p>
                                <p>CA ${(product.price * quantity).toFixed(2)}</p>
                                <p>Quantity: {quantity}</p>
                                <button 
                                    className={styles.removeBtn} 
                                    onClick={() => handleRemove(product)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className={styles.subtotal}>
                        <p className={styles.subtotalText}>Subtotal: </p>
                        <p className={styles.subtotalText}>CA ${subtotal}</p>
                    </div>
                    <div className={styles.checkoutButtonContainer}>
                        <NavLink onClick={onClose} className={styles.checkoutButton} to='/Checkout'>
                            Checkout
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
