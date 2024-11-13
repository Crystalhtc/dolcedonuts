import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data/products';
import styles from './ProductDetails.module.css'; 
import MintButton from '../components/MintButton/MintButton.jsx';  

export default function ProductDetails({ addToCart }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    function incrementCartItem() {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }
    function decrementCartItem() {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    }

    const cartTotal = (product.price * quantity).toFixed(2);

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
                        <button onClick={() => decrementCartItem()}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => incrementCartItem()}>+</button>
                    </div>
                </div>

                <h3>Subtotal: ${cartTotal}</h3>

                <MintButton 
                    onClick={() => addToCart(product, quantity)}
                    buttonText="Add to Cart" path="#"/>
            </div>
        </div>
    );
}

