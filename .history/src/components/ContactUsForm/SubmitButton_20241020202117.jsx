import React from 'react';
import styles from './SubmitButton.module.css'; 

export default function SubmitButton({ buttonText, onClick }) {
    return (
        <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitBtn}><h2 className={styles.btnH2}>{buttonText}</h2></button>
        </div>
    );
}
