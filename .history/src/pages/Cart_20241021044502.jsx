import { useState } from "react";
import styles from "./Cart.module.css";

export default function Cart() {
    
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

    const getTotalPrice = (item) => {
        return (quantities[item] * prices[item]).toFixed(2); 
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
                    <div className={styles.quantityControls}>
                        <button onClick={() => handleRemove("hollyJolly")}>-</button>
                        <span>{quantities.hollyJolly}</span>
                        <button onClick={() => handleAdd("hollyJolly")}>+</button>
                    </div>
                    <p className={styles.totalPrice}>Total: ${getTotalPrice("hollyJolly")}</p>
                </div>

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
                    <p className={styles.totalPrice}>Total: ${getTotalPrice("customDonut")}</p>
                </div>

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
