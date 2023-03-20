import { useParams, NavLink, useLocation } from 'react-router-dom';
import { getGenreMovies, getTrendingMovies, getSearchMovies } from '../components/Api/api';
//  getSearchMovies,getDetailsMovie

import { useEffect, useState } from 'react';

const MovieCard = () => {
   const [cards, setCards] = useState('');
   const [ genres , setGenres] = useState('');
   // const [detail, setDetail] = useState('')
   const { currentId } = useParams();
   const location = useLocation()
   console.log(location)

   const currentCard = cards && cards.find(card => `${card.id}` === `${currentId}`);
   const date = `${currentCard.release_date}`;


   useEffect(() => {
      async function getData() {
         
         
         // setDetail(await getDetailsMovie(currentId))
         if (!location.state.name) {
            setCards(await getTrendingMovies(currentId));
            return setGenres(await getGenreMovies());
         }
            setCards(await getSearchMovies(location.state.name));
            return setGenres(await getGenreMovies());
      }
      getData();
   }, [currentId]);



   function getGenreMarkup() {
      const genresId = currentCard.genre_ids;
      return genres &&
         genres.map(genre => {
            if (genresId.includes(genre.id)) {
               return <li key={genre.id} >{genre.name}</li>;
            }
         });
   }

   return (
      <main>
         <NavLink to={`${location.state.from.pathname}` ?? '/home'}>Go back</NavLink>
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
                  <ul>{getGenreMarkup()}</ul>
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
