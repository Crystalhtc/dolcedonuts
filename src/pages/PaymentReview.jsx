import styles from './PaymentReview.module.css'; 

export default function PaymentReview() {
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
                    <div className={styles.continueButton}>
                        <button>Continue Shopping</button>
                    </div>
                </div>
                <div className={styles.orderSummary}>
                    <h1>Your order:</h1>
                    <div className={styles.productList}>
                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="" alt="product" />
                            </div>
                            <div className={styles.productInfo}>
                                <p className={styles.productName}>Product name</p>
                                <p>Quantity: 1</p>
                            </div>
                            <div className={styles.productPrice}>
                                <p>CA$2.00</p>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="" alt="product" />
                            </div>
                            <div className={styles.productInfo}>
                                <p className={styles.productName}>Product name</p>
                                <p>Quantity: 1</p>
                            </div>
                            <div className={styles.productPrice}>
                                <p>CA$2.00</p>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="" alt="product" />
                            </div>
                            <div className={styles.productInfo}>
                                <p className={styles.productName}>Product name</p>
                                <p>Quantity: 1</p>
                            </div>
                            <div className={styles.productPrice}>
                                <p>CA$2.00</p>
                            </div>
                        </div>
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