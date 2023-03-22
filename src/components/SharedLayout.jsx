import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './componentsStyles/sharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
   &.active {
      color: tomato;
   }
`;



export const SharedLayout = () => {
   return (
      <div>
         <header className={css.container}>
            <nav>
               <StyledLink to="/" className={css.navLink}>
                  Home
               </StyledLink>
               <StyledLink to="/movies" className={css.navLink}>
                  Movies
               </StyledLink>
            </nav>
         </header>
         <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
         </Suspense>
      </div>
   );
};
