import React from 'react';
import styles from './SubmitButton.module.css'; 

export default function SubmitButton({ buttonText, onClick }) {
    return (
        <div className={styles.buttonContainer}>
            <button type="submit" onClick={onClick} className={styles.submitBtn}>
                {buttonText}
            </button>
        </div>
    );
}
