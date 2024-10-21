import styles from "./Cart.module.css"

export default function Cart() {
    return(
        <div>
            <h2 className={styles.cartH2}>Shopping Cart</h2>
            <div className={styles.listContainer}>
                <div className={styles.itemList}>
                    <img src="./assets/donut2.png"></img>
                </div>
                <div className={styles.itemList}>

                </div>
                <div className={styles.itemList}>

                </div>
            </div>
        </div>
    )
}