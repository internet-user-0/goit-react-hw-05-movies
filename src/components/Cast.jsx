import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorsMovie } from 'api/api';

const Cast = () => {
   const [actors, setActors] = useState([]);
   const { currentId } = useParams();
   useEffect(() => {
      async function getData() {
         return setActors(await getActorsMovie(currentId));
      }
      getData();
   }, [currentId]);

   console.log(actors);
   return (
      <ul>
         {actors && actors.map(actor => {
               return <li key={actor.id}>
                  {actor.profile_path && <img
                     src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                     alt=""
                     width="100"
                  />}
                  <p>{actor.name}</p>
                  <p>{actor.character}</p>
               </li>;
            })}
      </ul>
   );
};

export default Cast;