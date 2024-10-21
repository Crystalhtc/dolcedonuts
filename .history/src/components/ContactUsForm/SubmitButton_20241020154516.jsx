import React from 'react';
import styles from './SubmitButton.module.css'; 

export default function SubmitButton({ buttonText }) {
    return (
        <div>
            <button className={styles.submit} type="submit">{buttonText}</button>
        </div>
    );
}
