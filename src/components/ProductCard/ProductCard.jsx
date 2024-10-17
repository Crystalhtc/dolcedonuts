import styles from './ProductCard.module.css';

export default function ProductCard({ name, price, image_url, showDetails }) {
    return(
        <div className={styles.container}>
            <img src={image_url } alt={name} />
            <div>
                <h1>{name}</h1>
            </div>
            {showDetails ?
                <div className={styles.priceAndButton}>
                    <p>${price}</p>
                    <button>Details</button>
                </div>
                :<div></div>
            }
        </div>
    )
}