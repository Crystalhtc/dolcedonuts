import styles from './Home.module.css';

export default function About() {
    return(
        <div>
            <h1>About Us</h1>
            <hr/>
            <br/>
                <div className="aboutUsContainer">
                    <div style={{ textAlign: 'center' }}>
                         <img 
                          src="src/assets/about.png"
                            alt="Women wearing an apron" 
                            className={styles.aboutUs}
                            width={850}
                            height={470}
                             
                        />
                    </div>
                       
                </div>
        </div>
    )
}