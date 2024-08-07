import React from 'react';


const Rating = ({ value }) => {
    const totalStars = 5;
    const filledStars = Math.round(value);  // arrondi la valeur du rating
    const emptyStars = totalStars - filledStars;

    return (
        <div className="rating">
            {Array(filledStars).fill().map((_, i) => (
                <span key={`filled-${i}`} className="star filled">★</span>
            ))}
            {Array(emptyStars).fill().map((_, i) => (
                <span key={`empty-${i}`} className="star empty">☆</span>
            ))}
        </div>
    );
};

export default Rating;