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
                        <h3>Get in Touch</h3>
                        <p>Any inquiries? We're happy to help!</p>
                        <div className={styles.nameFieldContainer}>
                            <div className={styles.nameField}>
                                <input 
                                    className={styles.inputWidth}
                                    name="firstName" 
                                    placeholder="First name"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirst(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.nameField}>
                                <input 
                                    className={styles.inputWidth}
                                    name="lastName" 
                                    placeholder="Last name"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLast(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formPlaceholders}>
                            <input className={styles.emailPlaceholder} type="email" name="email" placeholder="Email"/>
                        </div>

                        <div className={styles.formPlaceholders}>
                            <textarea className={styles.messagePlaceholder} name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    
                </form>
            )}
        </>
    );
}
