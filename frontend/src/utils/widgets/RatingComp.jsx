/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function RatingComp({ maxRating = 5, value = 0 }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let calculatedRating = 0;
    if (value >= 0.85) {
      calculatedRating = 5;
    } else if (value >= 0.73) {
      calculatedRating = 4;
    } else if (value >= 0.72) {
      calculatedRating = 3;
    } else if (value >= 0.70) {
      calculatedRating = 2;
    } else {
      calculatedRating = 1;
    }
    setRating(calculatedRating);
  }, [value]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRatingChange(index + 1)}
          style={{ cursor: 'pointer' }}
        >
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default RatingComp;