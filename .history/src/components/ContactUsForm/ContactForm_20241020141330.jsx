import styles from './ContactForm.module.css';

export default function Form() {
    return(
        <div className={styles.contactFormContainer}>
            <h2>Get in touch</h2>
            <p>Any inquiries? We're happy to help.</p>
            <form className={styles}>
                <div className={styles.formPlaceholders}>
                    <label for="firstName">First Name:</label>
                    <input type="text" name="firstName" placeholder="First name"/>
                    <br/>
                    <label for="flastName">Last Name:</label>
                    <input type="text" name="lastName" placeholder="Last name"/>
                </div>
                
                <div className={styles.formPlaceholders}>
                    
                </div>

                <div className={styles.formPlaceholders}>
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="Email"/>
                </div>

                <div className={styles.formPlaceholders}>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write your message here"></textarea>
                </div>
            </form>

            
        </div>
    )
}