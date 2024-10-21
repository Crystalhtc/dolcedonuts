import { useState } from "react";
import styles from './ContactForm.module.css';
import { useRouter } from 'next/router';

export default function Form() {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log('Thank you for your inquiry!');
        setSubmitted(true);
    };

    return (
        <>
            {submitted ? (
                <div className={styles.successfulMessage}>
                    <p className={styles.submittedMessage}>You will hear from us within 14 business days</p>
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
{/* <div className={styles.contactFormContainer}>
            <h2>Get in touch</h2>
            <p>Any inquiries? We're happy to help.</p>
            <form className={styles.form}>
                <div className={styles.formPlaceholdersName}>
                    <input type="text" name="firstName" placeholder="First name"/>
                    <br/>
                    <input type="text" name="lastName" placeholder="Last name"/>
                </div>
                
                <div className={styles.formPlaceholders}>
                    
                </div>

                <div className={styles.formPlaceholders}>
                    <input type="email" name="email" placeholder="Email"/>
                </div>

                <div className={styles.formPlaceholders}>
                    <textarea name="message" placeholder="Your message"></textarea>
                </div>
            </form>
        </div> */}