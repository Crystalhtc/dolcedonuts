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
                    <h2>${price}</h2>
                    <button><h2>Details</h2></button>
                </div>
                :<div></div>
            }
        </div>
    )
}