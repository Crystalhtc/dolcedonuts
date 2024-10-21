import { useState } from "react";
import styles from "./Cart.module.css";

export default function Cart() {
    // State to track quantity for each item
    const [quantities, setQuantities] = useState({
        hollyJolly: 1,
        customDonut: 1,
        linzerCookie: 1,
    });

    // Prices for each item
    const prices = {
        hollyJolly: 2.99,   // Price for Holly Jolly donut
        customDonut: 3.49,  // Price for Custom Donut
        linzerCookie: 4.49, // Price for Linzer Cookie
    };

    // Handle adding quantity
    const handleAdd = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: prevQuantities[item] + 1,
        }));
    };

    // Handle removing quantity (make sure it doesn't go below 1)
    const handleRemove = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: Math.max(1, prevQuantities[item] - 1),
        }));
    };

    // Calculate total price for a given item
    const getTotalPrice = (item) => {
        return (quantities[item] * prices[item]).toFixed(2); // Fixed to 2 decimal places
    };

    return (
        <div>
            <h2 className={styles.cartH2}>Shopping Cart</h2>
            <div className={styles.listContainer}>
                {/* Holly Jolly Donut */}
                <div className={styles.itemList}>
                    <img
                        src="src/assets/Donut2.png"
                        alt="Red glazed donut"
                        className={styles.donutImg}
                        width={180}
                        height={180}
                    />
                    <h3 className={styles.cookieName}>Holly Jolly</h3>
                    <p className={styles.price}>Price: ${prices.hollyJolly}</p>
                    <div className={styles.quantityControls}>
                        <button onClick={() => handleRemove("hollyJolly")}>-</button>
                        <span>{quantities.hollyJolly}</span>
                        <button onClick={() => handleAdd("hollyJolly")}>+</button>
                    </div>
                    <p className={styles.totalPrice}>Total: ${getTotalPrice("hollyJolly")}</p>
                </div>

                {/* Custom Donut */}
                <div className={styles.itemList}>
                    <img
                        src="src/assets/Donut1.png"
                        alt="Chocolate glazed donut"
                        className={styles.donutImg}
                        width={180}
                        height={180}
                    />
                    <h3 className={styles.cookieName}>Custom Donut</h3>
                    <p className={styles.price}>Price: ${prices.customDonut}</p>
                    <div className={styles.quantityControls}>
                        <button onClick={() => handleRemove("customDonut")}>-</button>
                        <span>{quantities.customDonut}</span>
                        <button onClick={() => handleAdd("customDonut")}>+</button>
                    </div>
                    <p className={styles.totalPrice}>Total: ${getTotalPrice("customDonut")}</p>
                </div>

                {/* Linzer Cookie */}
                <div className={styles.itemList}>
                    <img
                        src="src/assets/LinzerCookie.png"
                        alt="Heart butter cookie"
                        className={styles.donutImg}
                        width={180}
                        height={180}
                    />
                    <h3 className={styles.cookieName}>Linzer Cookie</h3>
                    
                    <div className={styles.quantityControls}>
                        <button onClick={() => handleRemove("linzerCookie")}>-</button>
                        <span>{quantities.linzerCookie}</span>
                        <button onClick={() => handleAdd("linzerCookie")}>+</button>
                    </div>
                    <p className={styles.totalPrice}>Total: ${getTotalPrice("linzerCookie")}</p>
                </div>
            </div>
        </div>
    );
}
