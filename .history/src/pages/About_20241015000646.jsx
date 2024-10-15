import styles from './Home.module.css';

export default function About() {
    return(
        <div>
            <h1 className={styles.aboutUsH1}>About Us</h1>
            <hr/>
            <br/>
                <div className={styles.aboutUsContainer}>
                    <div style={{ textAlign: 'center' }}>
                         <img 
                            src="src/assets/about.png"
                            alt="Women wearing an apron" 
                            className={styles.aboutUsImg}
                            width={850}
                            height={470} 
                        />
                    </div>
                    <br/>
                    <h2 className={styles.aboutUsH2}>Dolce Donuts</h2>
                    
                        <p className={styles.aboutUsParr}> Welcome to Dolce Donuts, a haven inspired by the Italian word 'dolce,' meaning sweet and soft.
                         
                            Our donut cafe is more than just a destination for delightful treats; it's a carefully curated 
                            experience designed to infuse joy and comfort into every visit. The irresistible aroma of freshly 
                            baked donuts, invites you to relax, unwind, and connect. 
                            We offer a delightful combination of scrumptious donuts and expertly crafted coffee, ensuring that 
                            every moment spent here is sweet and soft. 
                            <br/>
                            <br/>
                            It’s an ideal place for students and professionals seeking a focused study space, and couples in 
                            search of a serene date spot. Here, the inviting aroma of freshly baked donuts welcomes visitors 
                            to relax, unwind, and connect, all enhanced by the delightful combination of delicious donuts and coffee.
                        </p>
                        
                </div>
        </div>
    )
}