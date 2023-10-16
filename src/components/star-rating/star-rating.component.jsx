import React from 'react';
import './star-rating.component.css';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<span key={i} className="star" style={{ color: 'gold' }}>&#9733;</span>);
        } else {
            stars.push(<span key={i} className="star" style={{ color: 'gray' }}>&#9733;</span>);
        }
    }

    return (
        <div>
            {stars}
        </div>
    );
};

export default StarRating;
