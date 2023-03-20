import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { getSearchMovies } from 'components/Api/api';

function Movies() {
   const [movieCard, setMovieCard] = useState('');
   const [searchParams, setSearchParams] = useSearchParams('');
   const movieId = searchParams.get('movieId') ?? "";
   const location = useLocation()


   useEffect(() => {
      async function getData() {
         setMovieCard(await getSearchMovies(movieId));
         console.log(movieCard);
      }
      getData();
   }, [movieId]);

   const updateQueryString = evt => {
      const nameValue = evt.target.value;
      console.log(evt.target.value)
      
      if (nameValue === '') {
         return setSearchParams({});
      }
      return setSearchParams({ movieId: nameValue});
   };

   return (
      <main>
         <form action="">
            <input type="text" value={movieId} onChange={updateQueryString} />
            <button type="submit">submit</button>
            {movieCard && (
               <ul>
                  {movieCard.map(card => {
                     return (
                        <li key={card.id}>
                           <Link state={{from: location, name: movieId}} to={`${card.id}`}>{card.title}</Link>
                        </li>
                     );
                  })}
               </ul>
            )}
         </form>
      </main>
   );
}

export default Movies;
