import { useEffect, useMemo } from 'react';
import styles from './PaymentReview.module.css'; 
import CheckoutProductCard from "../components/CheckoutProductCard/CheckoutProductCard";
import MintButton from "../components/MintButton/MintButton";

export default function PaymentReview({ cart, clearCart }) {
    const TAX_RATE = 0.12; 

    const { subtotal, tax, total } = useMemo(() => {
        let subtotal = 0;
        for (const [product, quantity] of cart.entries()) {
            subtotal += product.price * quantity;
        }
        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax;

        return { subtotal, tax, total };
    }, [cart]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.reviewContainer}>
            <h1 className={styles.thankyouMsg}>Thank you for your order!</h1>
            <div className={styles.orderReview}>
                <div className={styles.orderDetails}>
                    <h1>Order information:</h1>
                    <table className={styles.orderTable}>
                        <tr>
                            <td>Order number:</td>
                            <td>12345678</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>
                                Forem ipsum dolor sit 
                                consectetur adipiscing 
                                Nunc vulputate libero et 
                            </td>
                        </tr>
                        <tr>
                            <td>Payment method:</td>
                            <td>Credit card</td>
                        </tr>
                    </table>
                    <div className={styles.continueButtonContainer}>
                        <div className={styles.continueButton}>
                            <MintButton 
                                products={[...cart.keys()]} 
                                path="/" 
                                buttonText="Continue Shopping" 
                                onClick={() => clearCart()}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.orderSummary}>
                    <h1>Your order:</h1>
                    <div className={styles.productList}>
                        {[...cart.entries()].map(([product, quantity]) => (
                            <CheckoutProductCard 
                                key={product.id}
                                imageSrc={product.image_url}
                                productName={product.name} 
                                quantity={quantity} 
                                price={`CA$${(product.price * quantity).toFixed(2)}`} 
                            />
                        ))}
                    </div>
                    <div className={styles.priceSummary}>
                        <div className={styles.subtotal}>
                            <p>Subtotal:</p>
                            <p>CA${subtotal.toFixed(2)}</p>
                        </div>
                        <div className={styles.tax}>
                            <p>Tax:</p>
                            <p>CA${tax.toFixed(2)}</p>
                        </div>
                        <div className={styles.total}>
                            <p>Total:</p>
                            <p>CA${total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
