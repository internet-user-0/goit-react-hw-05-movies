import { useParams, NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../components/Api/api';
// getSearchMovies,getDetailsMovie getGenreMovies

import { useEffect, useState } from 'react';

const MovieCard = () => {
   const [cards, setCards] = useState('');
   // const [ genres , setGenres] = useState('');
   // const [detail, setDetail] = useState('')
   const { currentId } = useParams();
   const location = useLocation()
   console.log(location)

   const currentCard = cards && cards.find(card => card.id === currentId);
   const date = `${currentCard.release_date}`;


   useEffect(() => {
      async function getData() {
         // не працює, вибиває помилку
         // setGenres(await getGenreMovies());
         // не працює, вибиває помилку
         // setDetail(await getDetailsMovie(currentId))
         // if (!location.state) {
            return setCards(await getTrendingMovies(currentId));
         // }
            // setCards(await getSearchMovies(location.state.name));
      }
      getData();
   }, [currentId]);

   console.log(currentCard);
   // console.log(currentId);
   // console.log(detail);


// не працює, вибиває помилку
   // function getGenreMarkup() {
   //    const genresId = currentCard.genre_ids;
   //    return genres &&
   //       genres.map(genre => {
   //          if (genresId.includes(genre.id)) {
   //             return <li key={genre.id} >{genre.name}</li>
   //          }
   //       });
   // }

   return (
      <main>
         <NavLink to="/home">Go back</NavLink>
         <div>
            <img src={`https://image.tmdb.org/t/p/w500/${currentCard.poster_path}`} alt="#" width='300'/>
            <ul>
               <li>
                  <h2>
                     {currentCard.title} <span>({date.slice(0, 4)})</span>
                  </h2>
               </li>
               <li>user score</li>
               <li>
                  <h3>Overvier</h3>
                  <p>{currentCard.overview}</p>
               </li>
               <li>
                  <h4>Gernes</h4>
                  {/* <ul>{getGenreMarkup()}</ul> */}
               </li>
            </ul>
         </div>
         <div>
            <p>additional information</p>
            <ul>
               <li>
                  Cast <p>{currentCard.overview}</p>
               </li>
               <li>Reviews</li>
            </ul>
         </div>
      </main>
   );
};

export default MovieCard;
