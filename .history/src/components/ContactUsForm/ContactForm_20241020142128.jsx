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
        


            
        </div>
    )
}