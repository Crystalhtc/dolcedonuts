import React from 'react';
import styles from './SubmitButton.module.css'; 

export default function SubmitButton({ buttonText }) {
    return (
        <div>
            <button type="submit"><h2>{buttonText}</h2></button>
        </div>
    );
}