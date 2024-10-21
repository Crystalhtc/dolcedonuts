import styles from './ContactForm.module.css';

export default function Form() {
    return(
        <div className={styles.contactFormContainer}>
            <h2>Get in touch</h2>
            <p>Any inquiries? We're happy to help.</p>
            <form>
            <div className={styles.formPlaceholders}>
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"/>
            </div>
            
            <divclassName={styles.formPlaceholders}>
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"/>
            </div>

            <divclassName={styles.formPlaceholders}>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"/>
            </div>

            <divclassName={styles.formPlaceholders}>
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message here"></textarea>
            </div>
            </form>

            
        </div>
    )
}