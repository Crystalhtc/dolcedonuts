import { useState } from "react";
import styles from "./Cart.module.css";

export default function Cart() {
    // State to track quantities of items
    const [quantities, setQuantities] = useState({
        hollyJolly: 1,
        customDonut: 1,
        linzerCookie: 1,
    });

    const prices = {
        hollyJolly: 2.99,   
        customDonut: 3.49,  
        linzerCookie: 4.49, 
    };

    // Function to add quantity
    const handleAdd = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: prevQuantities[item] + 1,
        }));
    };

    // Function to remove quantity but not below 1
    const handleRemove = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: Math.max(1, prevQuantities[item] - 1),
        }));
    };

    // Function to remove item from cart
    const handleRemoveItem = (item) => {
        setQuantities((prevQuantities) => {
            const newQuantities = { ...prevQuantities };
            delete newQuantities[item]; // Remove item from state
            return newQuantities;
        });
    };

    // Function to calculate total price of each item
    const getTotalPrice = (item) => {
        return (quantities[item] * prices[item]).toFixed(2); 
    };

    return (
        <div>
            <h2 className={styles.cartH2}>Shopping Cart</h2>
            <div className={styles.listContainer}>

                {/* Holly Jolly Item */}
                {quantities.hollyJolly && (
                    <div className={styles.itemList}>
                        <img
                            src="src/assets/Donut2.png"
                            alt="Red glazed donut"
                            className={styles.donutImg}
                            width={180}
                            height={180}
                        />
                        <h3 className={styles.cookieName}>Holly Jolly</h3>
                        <div className={styles.quantityControls}>
                            <button onClick={() => handleRemove("hollyJolly")}>-</button>
                            <span>{quantities.hollyJolly}</span>
                            <button onClick={() => handleAdd("hollyJolly")}>+</button>
                        </div>
                        <p className={styles.totalPrice}>CA ${getTotalPrice("hollyJolly")}</p>
                        <button className={styles.removeBtn} onClick={() => handleRemoveItem("hollyJolly")}>Remove</button>
                    </div>
                )}

                {/* Custom Donut Item */}
                {quantities.customDonut && (
                    <div className={styles.itemList}>
                        <img
                            src="src/assets/Donut1.png"
                            alt="Chocolate glazed donut"
                            className={styles.donutImg}
                            width={180}
                            height={180}
                        />
                        <h3 className={styles.cookieName}>Custom Donut</h3>
                        <div className={styles.quantityControls}>
                            <button onClick={() => handleRemove("customDonut")}>-</button>
                            <span>{quantities.customDonut}</span>
                            <button onClick={() => handleAdd("customDonut")}>+</button>
                        </div>
                        <p className={styles.totalPrice}>CA ${getTotalPrice("customDonut")}</p>
                        <button className={styles.removeBtn} onClick={() => handleRemoveItem("customDonut")}>Remove</button>
                    </div>
                )}

                {/* Linzer Cookie Item */}
                {quantities.linzerCookie && (
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
                        <p className={styles.totalPrice}>CA ${getTotalPrice("linzerCookie")}</p>
                        <button className={styles.removeBtn} onClick={() => handleRemoveItem("linzerCookie")}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
}
