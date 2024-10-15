import React from 'react';
import homeBanner from '../assets/home-main-banner.png';
import styles from './Home.module.css'; 

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <img 
                src={homeBanner} 
                alt="Home Main Banner" 
                className={styles.homeBanner} 
            />
        </div>
    );
}
