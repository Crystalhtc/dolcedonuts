import styles from './Contact.module.css';
import Form from '../components/ContactUsForm/ContactForm';

export default function Contact() {
    return(
        <div className={styles.contactUsContainer}>
            <h2 className={styles.contactUsH2}>Find Us</h2>
            <p>Our brick and mortar locations:</p>
                <div className={styles.contactUsCardContainer}>
                    <div className={styles.contactUsCard}>
                        <div className={styles.locationOne}>
                            <img src="https://images.unsplash.com/photo-1574033566548-f6c3f48cc11e?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="cafe table 1"
                            width={140}
                            height={240}
                            className={styles.contactUsImg}
                            />
                            <div>
                                <h2 className={styles.contactUsText}>Downtown</h2>
                                    <p className={styles.contactUsTextParr}> 699 West Pender St.
                                    <br/>
                                    Vancouver, BC V6B 1V3
                                    <br/>
                                    (604) XXX-XXXX
                                    <br/>
                                    Mon - Fri  9 – 5pm*
                                    <br/>
                                    Sat - Sun 10 - 6pm*
                                    <br/>
                                    *Or until sell out occurs.
                                    </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.contactUsCard}>
                        <div className={styles.locationOne}>
                            <img src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="cafe table 2"
                            width={140}
                            height={240}
                            className={styles.contactUsImg}
                            />
                            <div>
                                <h2 className={styles.contactUsText}>Mount Pleasant</h2>
                                    <p className={styles.contactUsTextParr}> XXX Main St.
                                    <br/>
                                    Vancouver, BC V4C 2V6
                                    <br/>
                                    (604) XXX-XXXX
                                    <br/>
                                    Mon - Fri  9 – 5pm*
                                    <br/>
                                    Sat - Sun 10 - 6pm*
                                    <br/>
                                    *Or until sell out occurs.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            <Form/>
        </div>
    )
}