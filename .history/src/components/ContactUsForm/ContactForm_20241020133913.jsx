import styles from './ContactForm.module.css';

export default function Form() {
    return(
        <div className={styles.contactFormContainer}>
            <h2>Get in touch</h2>
            <p>Any inquiries? We're happy to help.</p>
            <label for="lastName"></label>
        </div>
    )
}