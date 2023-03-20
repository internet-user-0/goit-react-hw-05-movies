import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
   return (
      <div>
         <header>
            <nav>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/movies">Movies</NavLink>
            </nav>
         </header>
         <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
         </Suspense>
      </div>
   );
};
