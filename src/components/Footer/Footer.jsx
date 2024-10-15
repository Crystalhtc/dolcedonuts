import React from 'react';
import styles from './Footer.module.css'; 
import socialMediaIcons from '../../assets/social-media-icons.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}> {/* Use styles for className */}
            <h2 className={styles.signUpMessage}>Sign up to get the latest news:</h2>
                  
            <div className={styles.topContainer}>
                <div className={styles.newsletterSignup}> {/* Use styles for className */}
                    <input type="email" placeholder="Enter your email address..." />
                       <button className={styles.signupButton}>Sign Up</button> {/* Use styles for className */}
                </div> 

                 <div className={styles.footerLinks}> 
                     <ul className={styles.linkList}> 
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottomContainer}> 
                <p>© 2024 All Rights Reserved</p>
                <div className={styles.socialMedia}> {/* Use styles for className */}
                    <img src={socialMediaIcons} alt="Social Media Icons" />
                </div>
            </div>  
        </footer>
    );
};

export default Footer;

