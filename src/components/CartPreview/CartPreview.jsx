import React from 'react';
import styles from './CartPreview.module.css';
import { NavLink } from 'react-router-dom';

export default function CartPreview({ cart, cartSize, onClose }) {
    const subtotal = [...cart.entries()].reduce((total, [product, quantity]) => {
        return total + (product.price * quantity);
      }, 0).toFixed(2)

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <div className={styles.heading}>
                    <h2>{cartSize} items</h2>
                    <button className={styles.closeButton} onClick={onClose}>&times;</button>
                </div>
                <div>
                {[...cart.entries()].map(([product, quantity]) => (
                    <div key={product.id} className={styles.singleItem}>
                        <img src={product.image_url} alt={product.name} />
                        <div>
                            <p>{product.name}</p>
                            <p>${(product.price * quantity).toFixed(2)}</p>
                            <p>{quantity}</p>
                        </div>
                    </div>
                ))}
                <div className={styles.subtotal}>
                    <p>Subtotal: ${subtotal}</p>
                </div>
                <NavLink to= '/Checkout'>Chackout</NavLink>
                </div>
            </div>
        </div>
    );
}