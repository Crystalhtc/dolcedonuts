import { useState } from "react";
import styles from './ContactForm.module.css';
import SubmitButton from "./SubmitButton";

export default function Form() {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log('Thank you for your inquiry!');
        setSubmitted(true);
    };

    // Resets the form for the user after it returns from "More inquiries"
    const handleMoreInquiries = () => {
        setFirst(''); 
        setLast(''); 
        setSubmitted(false); 
    };

    return (
        <>
            {submitted ? (
                <div className={styles.successfulMessage}>
                    <h2 className={styles.afterSubmitH2}>Thank you for your inquiry!</h2>
                    <p className={styles.afterSubmitText}>You will hear from us within 14 business days.</p>
                    <SubmitButton buttonText="More Inquiries" onClick={handleMoreInquiries} />
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
                            <input className={styles.emailPlaceholder} type="email" name="email" placeholder="Email" required/>
                        </div>

                        <div className={styles.formPlaceholders}>
                            <textarea className={styles.messagePlaceholder} name="message" placeholder="Your message" required></textarea>
                        </div>
                    </div>
                    <SubmitButton buttonText="Submit" />
                </form>
            )}
        </>
    );
}
