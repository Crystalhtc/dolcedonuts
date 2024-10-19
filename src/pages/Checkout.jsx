import React, { useState } from 'react';
import styles from './Checkout.module.css';
import AddressInput from "../components/AddressInput/AddressInput"
import CheckoutProductCard from "../components/CheckoutProductCard/CheckoutProductCard"
import { NavLink } from 'react-router-dom';

export default function Checkout() {
    // State to manage delivery options (store pickup or delivery)
    const [isDelivery, setIsDelivery] = useState(false);

    // State to manage form input values
    const [formData, setFormData] = useState({
        fullName: '',
        contactInfo: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        cardName: '',
        billingCountry: '',
        billingFirstName: '',
        billingLastName: '',
        billingAddress1: '',
        billingAddress2: '',
        deliveryAddress1: '',  
        deliveryAddress2: ''   
    });

    // Handle input changes and update formData
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };const [tax, setTax] = useState(0.72); // Example tax

    // Sample product data (you can fetch this from an API or a state management store)
    const products = [
        { id: 1, name: 'Product 1', quantity: 1, price: 2.00 }, // Price in CAD
        { id: 2, name: 'Product 2', quantity: 1, price: 2.00 },
        { id: 3, name: 'Product 3', quantity: 1, price: 2.00 },
    ];

    // Calculate subtotal
    const calculateSubtotal = () => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    // Function to calculate total
    const calculateTotal = () => {
        return calculateSubtotal() + tax;
    };

    // Check if all fields are filled for enabling the "Pay Now" button
    const isFormComplete = () => {
        const requiredFields = ['fullName', 'contactInfo', 'cardNumber', 'expirationDate', 'securityCode', 'cardName', 'billingCountry', 'billingFirstName', 'billingLastName', 'billingAddress1'];
        if (isDelivery) {
            requiredFields.push('deliveryAddress1');
        }
        return requiredFields.every(field => formData[field]);
    };

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.leftColumn}>
                <h1>Checkout</h1>

                {/* Contact Section */}
                <div className={styles.contactSection}>
                    <h2>Contact</h2>
                    <div className={styles.contactInputs}>
                        <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleInputChange} className={styles.input} />
                        <input type="text" name="contactInfo" placeholder="Email or mobile phone number" value={formData.contactInfo} onChange={handleInputChange} className={styles.input} />
                    </div>
                </div>

                {/* Delivery Options Section */}
                <div className={styles.deliverySection}>
            <h2>Delivery options</h2>
            <div className={styles.deliveryToggle}>
                <button 
                    className={`${styles.pickupButton} ${!isDelivery ? styles.active : ''}`} 
                    onClick={() => {
                        setIsDelivery(false); // Set Store Pickup as active
                    }}
                >
                    Store Pickup
                </button>
                <button 
                    className={`${styles.deliveryButton} ${isDelivery ? styles.active : ''}`} 
                    onClick={() => {
                        setIsDelivery(true); // Set Delivery as active
                    }}
                >
                    Delivery
                </button>
            </div>

            {!isDelivery ? (
                <div className={styles.addresses}>
                    <div className={styles.downtown}>
                        <input type="radio" id="downtown" name="location" value="downtown" />
                        <label htmlFor="downtown">
                            Downtown <br />
                            XXX West Pender St., Vancouver, BC V6B 1V3 <br />
                            (604) XXX-XXXX <br />
                            Mon - Fri 9 – 5pm*, Sat - Sun 10 - 6pm* <br />
                            *Or until sell out occurs.
                        </label>
                    </div>
                    <div className={styles.mountPleasant}>
                        <input type="radio" id="mountPleasant" name="location" value="mountPleasant" />
                        <label htmlFor="mountPleasant">
                            Mount Pleasant <br />
                            XXX Main St., Vancouver, BC V4C 2V6 <br />
                            (604) XXX-XXXX <br />
                            Mon - Fri 9 – 5pm*, Sat - Sun 10 - 6pm* <br />
                            *Or until sell out occurs.
                        </label>
                    </div>
                </div>
            ) : (
                <AddressInput handleInputChange={handleInputChange} /> // Use the new component
            )}
        </div>

                {/* Payment Section */}
                <div className={styles.payment}>
                    <h2>Payment</h2>
                    <div className={styles.paymentContainer}>
                        <div className={styles.creditCardTitle}>
                            <p>Credit Card</p>
                        </div>
                        <div className={styles.paymentInputs}>
                            <div className={styles.fullWidthInput}>
                                <input type="text" placeholder="Card number" /> 
                            </div>
                            <div className={styles.halfWidthInput}>
                                <div className={styles.firstHalfInput}>
                                    <input type="text" placeholder="Expiration date (MM/YY)" />
                                </div>
                                <div className={styles.secondHalfInput}>
                                    <input type="text" placeholder="Security code" />
                                </div>
                            </div>
                            <div className={styles.fullWidthInput}>
                                <input type="text" placeholder="Name on card" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.address}>
                    <h2>Billing address</h2>
                    <AddressInput handleInputChange={handleInputChange} />
                </div>
            </div>

            {/* Right Column for Order Summary */}
            <div className={styles.rightColumn}>
                <div className={styles.checkoutProducts}>
                    {products.map(product => (
                        <CheckoutProductCard 
                            key={product.id}
                            imageSrc="" // Add the image source URL here
                            productName={product.name} 
                            quantity={product.quantity} 
                            price={`CA$${product.price.toFixed(2)}`} 
                        />
                    ))}
                </div>
                <div className={styles.price}>
                    <div className={styles.subtotal}>
                        <p>Subtotal:</p>
                        <p>CA${calculateSubtotal().toFixed(2)}</p> {/* Display subtotal */}
                    </div>
                    <div className={styles.tax}>
                        <p>Tax:</p>
                        <p>CA${tax.toFixed(2)}</p> {/* Display tax */}
                    </div>
                    <div className={styles.total}>
                        <p>Total:</p>
                        <p>CA${calculateTotal().toFixed(2)}</p> {/* Calculate and display total */}
                    </div>
                </div>

                {/* Pay Now Button */}
                <div className={styles.payNowContainer}>
                    <div className={styles.payButton}>
                        <NavLink
                            to="/paymentReview"
                            className={styles.payNowLink}
                        >
                            Pay Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
