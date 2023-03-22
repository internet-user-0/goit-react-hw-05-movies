import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'api/api';

function Movies() {
   const [movieCard, setMovieCard] = useState('');
   const [searchParams, setSearchParams] = useSearchParams('');
   const movieId = searchParams.get('movieId') ?? "";
   const location = useLocation();


   useEffect(() => {
      async function getData() {
         setMovieCard(await getSearchMovies(movieId));
      }
      getData();
   }, [movieId]);

   const updateQueryString = evt => {
      const nameValue = evt.target.value;

      if (nameValue === '') {
         return setSearchParams({});
      }
      return setSearchParams({ movieId: nameValue });
   };

   return (
      <main>
         <input type="text" value={movieId} onChange={updateQueryString} />
         {movieCard && (
            <ul>
               {movieCard.map(card => {
                  return (
                     <li key={card.id}>
                        <NavLink
                           state={{ from: location}}
                           to={`${card.id}`}
                        >
                           {card.title}
                        </NavLink>
                     </li>
                  );
               })}
            </ul>
         )}
      </main>
   );
}

export default Movies;
