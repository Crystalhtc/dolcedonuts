import React from 'react';
import styles from './MintButton.module.css'; 

const MintButton = ({ path, buttonText }) => {
    return (
        <div className={styles.buttonContainer}>
            <div className={styles.button}>
                <NavLink
                    to= {path}
                    className={styles.buttonLink}
                >
                    {buttonText}
                </NavLink>
            </div>
        </div>
    );
};

export default MintButton;
