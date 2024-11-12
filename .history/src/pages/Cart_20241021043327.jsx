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
                        width={180}
                        height={180}
                    />
                    <h3 className={styles.cookieName}>Holly Jolly</h3>
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
                </div>
            </div>
        </div>
    )
}