"use client"

import { useState, useReducer } from "react";
import { reviews } from "../Data/reviews"
import styles from './Reviews.module.css'; 

export default function Reviews() {
    const [updatedReviews, dispatch] = useReducer(reviewReducer, reviews);
    const [errors, setErrors] = useState({
        name: false,
        rating: false,
        body: false
    });
    const stars = [
        "★☆☆☆☆",
        "★★☆☆☆",
        "★★★☆☆",
        "★★★★☆",
        "★★★★★",
        "★★★★☆",
    ]

    function reviewReducer(state, action) {
        switch(action.type) {
            case 'ADD_REVIEW':
                return [...state, action.payload];
            default:
                return state;
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        // Check if any errors exist
        const nameValue = data.get('name').trim();
        const ratingValue = data.get('rating');
        const bodyValue = data.get('body').trim();
        const newErrors = {
            name: nameValue === '',
            rating: !ratingValue,
            body: bodyValue === ''
        };
        setErrors(newErrors);
        if (Object.values(newErrors).some(error => error)) {
            return;
        }

        // make a new review object
        const newReview = {
            id: updatedReviews.length + 1,
            name: data.get('name'),
            rating: parseInt(data.get('rating')),
            comment: data.get('body'),
            date: new Date().toLocaleDateString()
        };
        dispatch({ type: 'ADD_REVIEW', payload: newReview });

        // Reset the form and the error
        e.target.reset();
        setErrors({
            name: false,
            rating: false,
            body: false
        });
    }

    return(
        <div className={styles.outerContainer}>
            
            <div className={styles.heading}>
                <h1>Reviews</h1>
                <p>We love hearing from you!</p>
            </div>

            <form onSubmit={onSubmit} className={styles.formContainer}>
                <div className={styles.nameAndRating}>
                    <div className={styles.row}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className={errors.name ? styles.error : ''} />
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="rating">Rating:</label>
                        <input type="number" min="1" max="5" name="rating" className={errors.rating ? styles.error : ''} />
                    </div>
                </div>
                <div className={styles.row}>
                    <label htmlFor="body">Comment:</label>
                    <textarea rows="5" name="body" className={errors.body ? styles.error : ''}/>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}>Submit</button>
                </div>
            </form>

            <div className={styles.reviewsContainer}>
                <h3 className={styles.reviewTitle}>What Our Customers say...</h3>
                {
                    updatedReviews.slice().reverse().map((review, index) => (
                        <div key={index} className={styles.reviewContainer}>
                            <p className={styles.name}>{review.name}</p>
                            <div className={styles.ratingAndDate}>
                                <p className={styles.star}>{stars[review.rating - 1]}</p>
                                <p className={styles.date}>{review.date}</p>
                            </div>
                            <p>{review.comment}</p>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}