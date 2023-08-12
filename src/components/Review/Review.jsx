import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReview } from 'api/Api';
import { ReviewsError } from './Review.styled';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    fetchReview(Number(movieId)).then(({ results }) => setReviews(results));
    }, [movieId]);

    if (reviews < 1) {
    return <ReviewsError>Sorry, we don't have any reviews!</ReviewsError>;
    }

    return (
    <div>
        {reviews.map(review => (
        <div key={review.id}>
            <p>
            <b>Author:</b> {review.author}
            </p>
            <p>
            <b>Content:</b> {review.content}
            </p>
            <hr />
        </div>
    ))}
    </div>
    );
};