import { useParams, NavLink, useLocation } from 'react-router-dom';
import {getGenreMovies, getDetailsMovie, getActorsMovie, getReviewsMovie } from '../components/Api/api';

import { useEffect, useState } from 'react';

const MovieCard = () => {
   const [currentCard, setCurrentCard] = useState('');
   const [ genres , setGenres] = useState('');
   const [actors, setActors] = useState('')
   const [reviews, setReviews] = useState('')
   const { currentId } = useParams();
   const location = useLocation()
   // console.log(location)



   useEffect(() => {
      async function getData() {
         setCurrentCard(await getDetailsMovie(currentId))
            setActors(await getActorsMovie(currentId))
            setReviews(await getReviewsMovie(currentId))
            setGenres(await getGenreMovies());
      }
      getData();
   }, [currentId]);



function getGenreMarkup() {
   console.log(currentCard.genres)
   console.log(genres)

   console.log()
};
getGenreMarkup()

   return (
      <main>
         <NavLink to={`${location.state.from.pathname}` ?? '/home'}>Go back</NavLink>
         <div>
            <img src={`https://image.tmdb.org/t/p/w500/${currentCard.poster_path}`} alt="#" width='300'/>
            <ul>
               <li>
                  <h2>
                     {currentCard.title} <span>()</span>
                  </h2>
               </li>
               <li>user score <p>{currentCard.vote_average}</p></li>
               <li>
                  <h3>Overvier</h3>
                  <p>{currentCard.overview}</p>
               </li>
               <li>
                  <h4>Gernes</h4>
                  <ul>{currentCard && currentCard.genres.map((genre =>{
                     return <li key={genre.id}>{genre.name}</li>
                  }))}</ul>
               </li>
            </ul>
         </div>
         <div>
            <p>additional information</p>
            <ul>
               <li>
                  Cast <p>{'people'}</p>
                  сделать это кнопкой по которой рисуется разметка 
                  {actors && actors.cast.map((actor => {
                     return (<p key={actor.id}>{actor.name}</p>)
                  }))}
               </li>
               <li>Reviews
               сделать это кнопкой по которой рисуется разметка
               {reviews && reviews.map((review => {
                     return (<p key={review.id}>{review.content}</p>)
                  }))}
               </li>
            </ul>
         </div>
      </main>
   );
};

export default MovieCard;
