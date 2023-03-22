import {
   useParams,
   NavLink,
   useLocation,
   Link,
   Outlet,
} from 'react-router-dom';
import { getDetailsMovie} from '../api/api';

import { useEffect, useState } from 'react';

import css from '../pageStyles/movieCard.module.css'

const MovieCard = () => {
   const [currentCard, setCurrentCard] = useState('');
   const { currentId } = useParams();
   const location = useLocation();


   useEffect(() => {
      async function getData() {
         setCurrentCard(await getDetailsMovie(currentId));
      }
      getData();
   }, [currentId]);

   return (
      <main className={css.container}>
         <NavLink to={`${location.state.from.pathname}` ?? '/home'}>
            Go back
         </NavLink>
         <div className={css.filmContainer}>
            <img
               src={`https://image.tmdb.org/t/p/w500/${currentCard.poster_path}`}
               alt="#"
               width="300"
            />
            <ul>
               <li>
                  <h2>
                     {currentCard.title}{' '}
                     <span>({`${currentCard.release_date}`.slice(0, 4)})</span>
                  </h2>
               </li>
               <li>
                  user score <p>{currentCard.vote_average}</p>
               </li>
               <li>
                  <h3>Overvier</h3>
                  <p>{currentCard.overview}</p>
               </li>
               <li>
                  <h4>Gernes</h4>
                  <ul>
                     {currentCard &&
                        currentCard.genres.map(genre => {
                           return <li key={genre.id}>{genre.name}</li>;
                        })}
                  </ul>
               </li>
            </ul>
         </div>
         <div className={css.detailedInformation}>
            <p>additional information</p>
            <ul>
               <li>
                  <Link to="cast">Cast</Link>
               </li>
               <li>
                  <Link to="reviews">Reviews</Link>
               </li>
            </ul>
         </div>
         <Outlet />
      </main>
   );
};

export default MovieCard;
