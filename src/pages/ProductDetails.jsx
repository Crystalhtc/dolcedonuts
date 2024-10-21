import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data/products';
import styles from './ProductDetails.module.css'; 
import MintButton from '../components/MintButton/MintButton.jsx';  

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    const handleAddToCart = () => {
        console.log('Add to cart clicked');
    };

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    return (
        <div className={styles.productDetailsContainer}>
            <div className={styles.productDetailsImageContainer}>
                <img src={product.image_url} alt={product.name} className={styles.productDetailsImage} />
            </div>
            <div className={styles.productDetailsInfo}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>

                <div className={styles.quantitySection}>
                    <h3>Quantity</h3>
                    <div className={styles.quantitySelector}>
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                </div>

                <h3>Subtotal: ${(product.price * quantity).toFixed(2)}</h3>

                <MintButton 
                onClick={handleAddToCart}
                buttonText="Add to Cart" />
            </div>
        </div>
    );
}

