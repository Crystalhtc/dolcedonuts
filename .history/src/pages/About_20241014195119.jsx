import styles from './Home.module.css';

export default function About() {
    return(
        <div>
            <h1>About Us</h1>
            <hr/>
                <div>
                    <img 
                        src="src/assets/about.png"
                        alt="Women wearing an apron" 
                        className={styles.aboutUsImg}
                        width={800}
                        height={450} 
                    />

        </div>
    )
}