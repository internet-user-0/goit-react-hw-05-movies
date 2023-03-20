import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {getTrendingMovies} from '../components/Api/api'


const Home = () => {
   const [trends, setTrends] = useState('')


   useEffect(() => {
      async function getData() {
         setTrends(await getTrendingMovies());
      }
      getData();
   }, []);

   console.log(trends)

   return (
      <main>
         <h1>Trending today</h1>
         <ul>
            {trends && trends.map((trend) => {
               return (
                  <li key={`${trend.id}`}>
                     <NavLink to={`${trend.id}`}>{trend.title}</NavLink>
                  </li>
               );
            })}
         </ul>
      </main>
   );
};

export default Home;

/* <Link to={`${anime}`} key={anime}>
   {anime}
</Link>; */
