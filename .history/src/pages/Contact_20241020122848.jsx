import styles from './Contact.module.css';

export default function Contact() {
    return(
        <div className={styles.contactUsContainer}>
            <h1 className={styles.contactUsH1}>Find Us</h1>
            <p>Our brick and mortar locations:</p>
            <div>
                <div className={styles.locationOne}>
                <img src="https://images.unsplash.com/photo-1574033566548-f6c3f48cc11e?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="cafe table 1"
                width={140}
                height={240}
                className={styles.contactUsImg}
                />
                <div className={styles.contactUs}>
                    <h2>Downtown</h2>
                        <p> 699 West Pender St.
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
            
            
        </div>
    )
}