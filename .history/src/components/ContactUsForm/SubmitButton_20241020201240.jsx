import React from 'react';
import styles from './SubmitButton.module.css'; 

export default function SubmitButton({ buttonText }) {
    return (
        <div>
            <button type="submit" className={styles.submitB}><h2 className={styles.btnH2}>{buttonText}</h2></button>
        </div>
    );
}
