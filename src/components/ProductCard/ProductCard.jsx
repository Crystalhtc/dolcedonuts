import styles from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ name, price, image_url, showDetails, id }) {
    const navigate = useNavigate();

    function handleDetailsClick() {
        navigate(`/ProductDetails/${id}`);
    }

    return (
        <div className={styles.container}>
            <img 
                className={styles.image}
                src={image_url}  
                alt={name}
            />
            <div>
                <h1>{name}</h1>
            </div>
            {showDetails && (
                <div className={styles.priceAndButton}>
                    <h2>${price.toFixed(2)}</h2>
                    <button onClick={handleDetailsClick}>
                        <h2>Details</h2>
                    </button>
                </div>
            )}
        </div>
    );
}
