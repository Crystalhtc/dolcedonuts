import { useState } from "react";
import styles from "./Cart.module.css";
import MintButton from "../components/MintButton/MintButton";

export default function Cart() {
    const [quantities, setQuantities] = useState({
        hollyJolly: 1,
        customDonut: 1,
        linzerCookie: 1,
    });

    const prices = {
        hollyJolly: 2.00,   
        customDonut: 4.00,  
        linzerCookie: 2.00, 
    };

    const handleAdd = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: prevQuantities[item] + 1,
        }));
    };

    const handleRemove = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: Math.max(1, prevQuantities[item] - 1),
        }));
    };

    const handleRemoveItem = (item) => {
        setQuantities((prevQuantities) => {
            const newQuantities = { ...prevQuantities };
            delete newQuantities[item]; 
            return newQuantities;
        });
    };

    const getTotalPrice = (item) => {
        return (quantities[item] * prices[item]).toFixed(2);
    };

    const calculateTotal = () => {
        return Object.keys(quantities).reduce((total, item) => {
            return total + quantities[item] * prices[item];
        }, 0).toFixed(2);
    };

    return (
        <div>
            <h2 className={styles.cartH2}>Shopping Cart</h2>
            <div className={styles.listContainer}>
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
                        <div className={styles.priceRemove}>
                            <p className={styles.totalPrice}>CA ${getTotalPrice("hollyJolly")}</p>
                            <button className={styles.removeBtn} onClick={() => handleRemoveItem("hollyJolly")}>Remove</button>
                        </div>
                    </div>
                )}

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
                        <div className={styles.priceRemove}>
                            <p className={styles.totalPrice}>CA ${getTotalPrice("customDonut")}</p>
                            <button className={styles.removeBtn} onClick={() => handleRemoveItem("customDonut")}>Remove</button>
                        </div>
                    </div>
                )}

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
                        <div className={styles.priceRemove}>
                            <p className={styles.totalPrice}>CA ${getTotalPrice("linzerCookie")}</p>
                            <button className={styles.removeBtn} onClick={() => handleRemoveItem("linzerCookie")}>Remove</button>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.totalContainer}>
                <h2 className={styles.totalH2}>Subtotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CA ${calculateTotal()}</h2>
                <div className={styles.checkoutBtn} style={{ width: '200px', justifyContent }}>
                    <MintButton buttonText="Checkout" />
                </div>

            </div>
        </div>
    );
}
