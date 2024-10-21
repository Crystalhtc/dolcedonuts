import styles from "./Cart.module.css"

export default function Cart() {
    return(
        <div>
            <h2 className={styles.cartH2}>Shopping Cart</h2>
            <div className={styles.listContainer}>
                <div className={styles.itemList}>
                    <img 
                        src="src/assets/Donut2.png"
                        alt="Red glazed donut"
                        className={styles.donutImg}
                        
                    />
                </div>
                <div className={styles.itemList}>

                </div>
                <div className={styles.itemList}>

                </div>
            </div>
        </div>
    )
}