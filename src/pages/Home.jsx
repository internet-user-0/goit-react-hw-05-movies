import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../api/api';

const Home = () => {
   const [trends, setTrends] = useState('');
   const location = useLocation();
   console.log(location);

   useEffect(() => {
      async function getData() {
         setTrends(await getTrendingMovies());
      }
      getData();
   }, []);

   console.log(trends);

   return (
      <main>
         <h1>Trending today</h1>
         <ul>
            {trends &&
               trends.map(trend => {
                  return (
                     <li key={`${trend.id}`}>
                        <NavLink state={{ from: location }} to={`${trend.id}`}>
                           {trend.title}
                        </NavLink>
                     </li>
                  );
               })}
         </ul>
      </main>
   );
};

export default Home;