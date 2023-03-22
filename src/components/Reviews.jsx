import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'api/api';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const { currentId } = useParams();

   useEffect(() => {
      async function getData() {
         return setReviews(await getReviewsMovie(currentId));
      }
      getData();
   }, [currentId]);

   return (
      <ul>
         {reviews.length > 0 ? (
            reviews.map(review => {
               return (
                  <li key={review.id}>
                     <h3>{review.author}</h3>
                     <p>{review.content}</p>
                  </li>
               );
            })
         ) : (<div>We don't have any for this movie.</div>)}
      </ul>
   );
};

export default Reviews;
