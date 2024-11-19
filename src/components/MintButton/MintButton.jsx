import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MintButton.module.css';

const MintButton = ({ path, buttonText, onClick, className }) => {
    return (
        <div className={`${styles.buttonContainer} ${className || ''}`}>
            <div className={styles.button}>
                <NavLink
                    to={path}
                    className={styles.buttonLink}
                    onClick={onClick}
                >
                    {buttonText}
                </NavLink>
            </div>
        </div>
    );
};

export default MintButton;
