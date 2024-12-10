import React from 'react';
import styles from './AddressInput.module.css';

const AddressInputs = ({ handleInputChange }) => {
    return (
        <div className={styles.addressInputs}>
            <div className={styles.fullWidthInput}>
                <input type="text" name="country" placeholder="Country" onChange={handleInputChange} autoComplete="off" />
            </div>
            <div className={styles.halfWidthInput}>
                <div className={styles.firstHalfInput}>
                    <input type="text" name="firstName" placeholder="First name" onChange={handleInputChange} autoComplete="off" />
                </div>
                <div className={styles.secondHalfInput}>
                    <input type="text" name="lastName" placeholder="Last name" onChange={handleInputChange} autoComplete="off" />
                </div>
            </div>
            <div className={styles.fullWidthInput}>
                <input type="text" name="addressLine1" placeholder="Address Line 1" onChange={handleInputChange} autoComplete="off" />
            </div>
            <div className={styles.fullWidthInput}>
                <input type="text" name="addressLine2" placeholder="Address Line 2" onChange={handleInputChange} autoComplete="off" />
            </div>
        </div>
    );
};

export default AddressInputs;
