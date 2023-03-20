import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
// https://api.themoviedb.org/3/movie/550?api_key=c0cabbf2dbe76982c2844e8b0f599769


// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieCard from './MovieCard';
const Home = lazy(() => import("../pages/Home"))
const Movies = lazy(() => import("../pages/Movies"))
const MovieCard = lazy(() => import("../pages/MovieCard"))
// path='/home'

export const App = () => {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route path='/home' element={<Home />} />
            <Route path="/home/:currentId" element={<MovieCard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:currentId" element={<MovieCard />} />
            <Route path="*" element={<Home />} />
         </Route>
      </Routes>
   );
};
