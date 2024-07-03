import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starsTotal = 5;
  const solidStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="star-rating">
      {[...Array(starsTotal)].map((_, index) => {
        let starIcon = regularStar;
        if (index < solidStars) {
          starIcon = solidStar; // Solid star
        } else if (index === solidStars && hasHalfStar) {
          starIcon = solidStar; // Half solid star
        }

        return <FontAwesomeIcon key={index} icon={starIcon} className="star-icon" />;
      })}
    </div>
  );
};

export default StarRating;
