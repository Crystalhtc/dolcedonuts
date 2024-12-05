"use client"

import { useState, useReducer } from "react";
import { reviews } from "../Data/reviews"
import styles from './Reviews.module.css'; 

export default function Reviews() {
    const [editingReviewId, setEditingReviewId] = useState(null);
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
            case 'UPDATE_REVIEW':
                return state.map(review => 
                    review.id === action.payload.id ? action.payload : review
                );
            case 'DELETE_REVIEW':
                return state.filter(review => review.id !== action.payload);
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

        if (editingReviewId) {
            // Update existing review
            const updatedReview = {
                id: editingReviewId,
                name: data.get('name'),
                rating: parseInt(data.get('rating')),
                comment: data.get('body'),
                date: new Date().toLocaleDateString()
            };
            dispatch({ type: 'UPDATE_REVIEW', payload: updatedReview });
            setEditingReviewId(null);
        } else {
            // Add new review
            const newReview = {
                id: updatedReviews.length + 1,
                name: data.get('name'),
                rating: parseInt(data.get('rating')),
                comment: data.get('body'),
                date: new Date().toLocaleDateString()
            };
            dispatch({ type: 'ADD_REVIEW', payload: newReview });
        }

        // Reset the form and the error
        e.target.reset();
        setErrors({
            name: false,
            rating: false,
            body: false
        });
    }

    function handleEdit(review) {
        setEditingReviewId(review.id);
        // Populate the form with the existing review details
        const form = document.querySelector('form');
        form.querySelector('input[name="name"]').value = review.name;
        form.querySelector('input[name="rating"]').value = review.rating;
        form.querySelector('textarea[name="body"]').value = review.comment;

        window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }

    function handleDelete(reviewId) {
        dispatch({ type: 'DELETE_REVIEW', payload: reviewId });
    }

    function handleCancelEdit() {
        setEditingReviewId(null);
        // Reset the form
        const form = document.querySelector('form');
        form.reset();
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
                    {editingReviewId ? (
                        <>
                            <button type="submit" className={styles.btn}>Update</button>
                            <button 
                                type="button" 
                                onClick={handleCancelEdit} 
                                className={`${styles.btn} ${styles.cancelBtn}`}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button className={styles.btn}>Submit</button>
                    )}
                </div>
            </form>

            <div className={styles.reviewsContainer}>
                <h3 className={styles.reviewTitle}>What Our Customers say...</h3>
                {
                    updatedReviews.slice().reverse().map((review) => (
                        <div key={review.id} className={styles.reviewContainer}>
                            <div className={styles.reviewHeader}>
                                <p className={styles.name}>{review.name}</p>
                                <div className={styles.reviewActions}>
                                    <button 
                                        onClick={() => handleEdit(review)} 
                                        className={styles.editBtn}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(review.id)} 
                                        className={styles.deleteBtn}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
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