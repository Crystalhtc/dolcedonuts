import React from 'react';
import homeBanner from '../assets/home-main-banner.png';
import cardImage1 from '../assets/home-card-img-1.png'; 
import cardImage2 from '../assets/home-card-img-2.png';
import cardImage3 from '../assets/home-card-img-3.png';
import cardImage4 from '../assets/home-card-img-4.png';
import cardImage5 from '../assets/home-card-img-5.png';
import styles from './Home.module.css'; 
import { NavLink } from 'react-router-dom';

const cardData = [
    { 
        id: 1, 
        image: cardImage1, 
        text: (
            <div className={styles.addressCard}>
                    <div className={styles.addressColumn}>
                        <h2>Downtown</h2>
                        <p>234 West Pender St.<br />
                        Vancouver, BC<br />
                        V6B 1V3<br />
                        (604) 123-3456<br />
                        Mon - Fri 9am – 5pm*<br />
                        Sat - Sun 10am – 6pm*<br />
                        *Or until sell out occurs.</p>
                    </div>
                    <div className={styles.addressColumn}>
                        <h2>Mount Pleasant</h2>
                        <p>123 Main St.<br />
                        Vancouver, BC<br />
                        V4C 2V6<br />
                        (604) 234-3456<br />
                        Mon - Fri 9am – 5pm*<br />
                        Sat - Sun 10am – 6pm*<br />
                        *Or until sell out occurs.</p>
                    </div>
            </div>
        ),
        button: 'About Us', 
        link: '/about' 
    },
    // { 
    //     id: 2, 
    //     image: cardImage2, 
    //     text: 'Choose your favourite toppings, glazes, and flavours to create a personalized donut, just the way you like.', 
    //     button: 'Custom Donut', 
    //     link: '/order'  
    // },
    { 
        id: 3, 
        image: cardImage3, 
        text: 'Pre-order our artisanal donuts for pick-up or shipping! We prepare the same selection as in store. Treat yourself to flavour-packed joy.', 
        button: 'Order Now', 
        link: '/order'  
    },
    { 
        id: 4, 
        image: cardImage4, 
        text: 'See what our customers are saying about Dolce Donuts! Discover why our signature treats, freshly baked goods, and expertly crafted coffees are loved by many.', 
        button: 'Reviews', 
        link: '/reviews'  
    },
    { 
        id: 5, 
        image: cardImage5, 
        text: 'We are here to assist with any inquiries or special orders. Drop us a message to help us make your donut dreams come true!', 
        button: 'Get in Touch', 
        link: '/contact'  
    },
];

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <img 
                src={homeBanner} 
                alt="Home Main Banner" 
                className={styles.homeBanner} 
            />

<div className={styles.cardsContainer}>
                {cardData.map((card, index) => (
                    <div 
                        key={card.id} 
                        className={`${styles.card} ${index % 2 === 0 ? styles.mintBackground : ''} ${index % 2 === 0 ? styles.cardLeft : styles.cardRight}`}
                    >
                        <img 
                            src={card.image} 
                            alt={`Card ${card.id}`} 
                            className={styles.cardImage} 
                        />
                        <div className={styles.cardContent}>
                            <p>{card.text}</p>
                            <NavLink
                                to={card.link}
                                // className={styles.ctaButton}
                                className={`${styles.ctaButton} ${card.id === 1 ? styles.aboutUsButton : ''}`}
                            >
                                {card.button}
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
