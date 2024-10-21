import styles from './ContactForm.module.css';

export default function Form() {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log('Your message has been submitted:', { firstName, lastName, phone, email, message });
        setSubmitted(true);
    };

    return(
        
        <div className={styles.contactFormContainer}>
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

            
        </div>
    )
}