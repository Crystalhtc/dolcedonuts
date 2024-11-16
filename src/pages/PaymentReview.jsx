import { useEffect } from 'react';
import styles from './PaymentReview.module.css'; 
import CheckoutProductCard from "../components/CheckoutProductCard/CheckoutProductCard"
import MintButton from "../components/MintButton/MintButton";
import Donut1 from '../assets/Donut1.png';
import Donut2 from '../assets/Donut2.png';
import LinzerCookie from '../assets/LinzerCookie.png';

export default function PaymentReview({cart, clearCart}) {

    const products = [
        { id: 1, name: 'Product 1', quantity: 1, price: 2.00, img: Donut1 },
        { id: 2, name: 'Product 2', quantity: 1, price: 2.00, img: Donut2 },
        { id: 3, name: 'Product 3', quantity: 1, price: 2.00, img: LinzerCookie },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return(
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
                                products={products} 
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
                                price={`CA$${product.price.toFixed(2)}`} 
                            />
                        ))}
                    </div>
                    <div className={styles.priceSummary}>
                        <div className={styles.subtotal}>
                            <p>Subtotal:</p>
                            <p>CA$6.00</p>
                        </div>
                        <div className={styles.tax}>
                            <p>Tax:</p>
                            <p>CA$0.72</p>
                        </div>
                        <div className={styles.total}>
                            <p>Total:</p>
                            <p>CA$6.72</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}