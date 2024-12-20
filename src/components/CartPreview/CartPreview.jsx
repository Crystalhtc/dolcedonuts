import React from 'react';
import styles from './CartPreview.module.css';
import { NavLink } from 'react-router-dom';

export default function CartPreview({ cart, cartSize, onClose, isFadingOut }) {
    
    const handleRemove = (item) => {
        const newCart = new Map(cart);
        const quantity = cart.get(item) || 0;
        if (quantity > 1) {
        newCart.set(item, quantity - 1);
        } else {
        newCart.delete(item);
        }
        setCart(newCart);
    };
    
    const subtotal = [...cart.entries()].reduce((total, [product, quantity]) => {
        return total + (product.price * quantity);
    }, 0).toFixed(2)

    return (
        <div className={`${styles.modalBackdrop} ${styles.cartPreview} ${isFadingOut ? styles.fadeOut : ''}`}  onClick={onClose}>
            <div className={styles.modalContent} 
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.heading}>
                    <p>{cartSize} items</p>
                    <button className={styles.closeButton} onClick={onClose}>&times;</button>
                </div>
                <div className={styles.items}>
                    {[...cart.entries()].map(([product, quantity]) => (
                        <div key={product.id} className={styles.singleItem}>
                            <img src={product.image_url} alt={product.name} />
                            <div className={styles.info}>
                                <p className={styles.cartProductText}>{product.name}</p>
                                <p>CA&nbsp; ${(product.price * quantity).toFixed(2)}</p>
                                <p>{quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.subtotal}>
                        <p className={styles.subtotalText}>Subtotal: </p>
                        <p className={styles.subtotalText}>CA ${subtotal}</p>
                    </div>
                    <div className={styles.checkoutButtonContainer}>
                        <NavLink onClick={onClose} className={styles.checkoutButton} to= '/Checkout'>Checkout</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}