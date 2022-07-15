import { useState, useEffect } from 'react';
import { movieReviewsAPI } from 'services/filmAPI';
const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieReviewsAPI(id).then(({ results }) => {
      console.log(results);
      setReviews(results);
    });
  }, [id]);

  if (reviews.length !== 0) {
    return (
      <ul>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don't have any reviews for this movie</p>;
  }
};
export default Reviews;
