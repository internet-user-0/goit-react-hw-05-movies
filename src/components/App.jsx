import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieCard = lazy(() => import('../pages/MovieCard'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));


export const App = () => {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:currentId" element={<MovieCard />}>
               <Route path="cast" element={<Cast />} />
               <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
         </Route>
      </Routes>
   );
};
