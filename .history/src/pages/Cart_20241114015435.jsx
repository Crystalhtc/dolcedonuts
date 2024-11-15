import { useEffect } from "react";
import styles from "./Cart.module.css";
import MintButton from "../components/MintButton/MintButton";

export default function Cart({ cart, setCart }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAdd = (item) => {
        const newCart = new Map(cart);
        newCart.set(item, (cart.get(item) || 0) + 1);
        setCart(newCart);
    };

    const handleRemove = (item) => {
        const newCart = new Map(cart);
        const quantity = cart.get(item) || 0;
        if (quantity > 1) {
        newCart.set(item, quantity - 1);
        } else {
        newCart.delete(item);
        }
        setCart(newCart);
    };

    const calculateTotal = () => {
        return [...cart.entries()].reduce((total, [product, quantity]) => {
        return total + product.price * quantity;
        }, 0).toFixed(2);
    };

    return (
        <div>
            <h2 className={styles.cartH2}>Shopping Cart</h2>
            <div className={styles.listContainer}>
            {[...cart.entries()].map(([product, quantity]) => (
                <div className={styles.itemList} key={product.id}>
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className={styles.donutImg}
                        width={180}
                        height={180}
                    />
                    <h3 className={styles.cookieName}>{product.name}</h3>
                    <div className={styles.quantityControls}>
                        <button onClick={() => handleRemove(product)} className={styles.quantityBtn}>-</button>
                        <span className={styles.quantityNum}>{quantity}</span>
                        <button onClick={() => handleAdd(product)} className={styles.quantityBtn}>+</button>
                    </div>
                    <div className={styles.priceRemove}>
                        <p className={styles.totalPrice}>CA ${(product.price * quantity).toFixed(2)}</p>
                        <button className={styles.removeBtn} onClick={() => handleRemove(product)}>Remove</button>
                    </div>
                </div>
                ))}
            </div>

            <div className={styles.totalContainer}>
                <h2 className={styles.totalH2}>Subtotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CA ${calculateTotal()}</h2>
                <div className={styles.checkoutBtn} style={{ width: '240px' }}>
                    <MintButton 
                        path="/checkout" 
                        buttonText="Checkout" 
                    />
                </div>

            </div>
        </div>
    );
}
