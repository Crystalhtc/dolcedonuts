import React from 'react';
import styles from './CheckoutProductCard.module.css'; // Adjust the import path based on your directory structure

const CheckoutProductCard = ({ imageSrc, productName, quantity, price }) => {
    return (
        <div className={styles.checkoutProductCard}>
            <div className={styles.productImage}>
                <img src={imageSrc} alt={productName} />
            </div>
            <div className={styles.productInfo}>
                <p className={styles.productName}>{productName}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className={styles.productPrice}>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default CheckoutProductCard;
