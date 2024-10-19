import styles from './Checkout.module.css'; 

export default function Checkout() {
    return(
        <div className={styles.checkoutContainer}>
            <div className={styles.leftColumn}>
                <h1>Checkout</h1>
                <div className={styles.contact}>
                    <h2>Contact</h2>
                    <div className={styles.contactInputs}>
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Email or mobile phone number" />
                    </div>  
                </div>
                <div className={styles.delivery}>
                    <h2>Delivery options</h2>
                    <div className={styles.deliveryOptions}>
                        <div className={styles.deliveryToggle}>
                            <button className={styles.pickup}>Store pickup</button>
                            <button className={styles.delivery}>Delivery</button>
                        </div>
                    </div>
                        <div className={styles.addresses}>
                            <div className={styles.downtown}>
                                <input type="radio" id="downtown" name="downtown" value="downtown"/>
                                <label for="downtown">
                                    Downtown  <br/>
                                    XXX West Pender St., Vancouver, BC V6B 1V3 <br/>
                                    (604) XXX-XXXX <br/>
                                    Mon - Fri  9 – 5pm*, Sat - Sun 10 - 6pm* <br/>
                                    *Or until sell out occurs.
                                </label>
                            </div>
                            <div className={styles.mountPleasant}>
                                <input type="radio" id="mount pleasant" name="mount pleasant" value="mount pleasant"/>
                                <label for="mount pleasant">
                                    Mount Pleasant <br/>
                                    XXX Main St., Vancouver, BC V4C 2V6 <br/>
                                    (604) XXX-XXXX <br/>
                                    Mon - Fri    9 – 5pm*, Sat - Sun   10 - 6pm* <br/>
                                    *Or until sell out occurs.
                                </label>
                            </div>
                        </div>
                </div>
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
                    <div className={styles.addressInputs}>
                            <div className={styles.fullWidthInput}>
                                <input type="text" placeholder="Country" /> 
                            </div>
                            <div>
                                <div className={styles.firstHalfInput}>
                                    <input type="text" placeholder="First name" />
                                </div>
                                <div className={styles.secondHalfInput}>
                                    <input type="text" placeholder="Last name" />
                                </div>
                            </div>
                            <div className={styles.fullWidthInput}>
                                <input type="text" placeholder="Address Line 1" />
                            </div>
                            <div className={styles.fullWidthInput}>
                                <input type="text" placeholder="Address Line 2" />
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.checkoutProducts}>
                    <div className={styles.checkoutProductCard}>
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
                    <div className={styles.checkoutProductCard}>
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
                    <div className={styles.checkoutProductCard}>
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
                <div className={styles.discountCode}>
                    <input type="text" placeholder="Discount code" />
                    <button>Apply</button>
                </div>
                <div className={styles.price}>
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
                <div className={styles.payButton}>
                    <button>Pay Now</button>
                </div>
            </div>
        </div>
    )
}