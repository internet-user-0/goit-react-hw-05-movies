import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../api/api';

const Home = () => {
   const [trends, setTrends] = useState('');
   const location = useLocation();

   useEffect(() => {
      async function getData() {
         setTrends(await getTrendingMovies());
      }
      getData();
   }, [trends]);

   return (
      <main>
         <h1>Trending today</h1>
         <ul>
            {trends &&
               trends.map(trend => {
                  return (
                     <li key={`${trend.id}`}>
                        <Link state={{ from: location }} to={`/movies/${trend.id}`}>
                           {trend.title}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </main>
   );
};

export default Home;