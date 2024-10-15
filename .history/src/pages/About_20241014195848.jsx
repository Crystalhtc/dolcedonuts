import styles from './Home.module.css';

export default function About() {
    return(
        <div>
            <h1>About Us</h1>
            <hr/>
                <div>
                    <div>
                         <img 
                            src="src/assets/about.png"
                            alt="Women wearing an apron" 
                            className={styles.aboutUsImg}
                            width={850}
                            height={470} 
                            style={{ textAlign: 'center' }}
                        />
                    </div>
                       
                </div>
        </div>
    )
}