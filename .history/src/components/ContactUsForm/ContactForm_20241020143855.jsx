import { useState } from "react";
import styles from './ContactForm.module.css';

export default function Form() {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log('Thank you for your inquiry!');
        setSubmitted(true);
    };

    return (
        <>
            {submitted ? (
                <div className={styles.successfulMessage}>
                    <h2>Thank you for your inquiry!</h2>
                    <p>You will hear from us within 14 business days.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmission} className={styles.formContainer}>
                    <div className={styles.nameContainer}>
                        <div className={styles.nameField}>
                            <input 
                                name="firstName" 
                                placeholder="First name"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirst(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.nameField}>
                            <label className={styles.labelName}>Last name</label>
                            <input 
                                className={styles.firstInput}
                                type="text"
                                id="last-name"
                                value={lastName}
                                onChange={(e) => setLast(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                </form>
            )}
        </>
    );
}
