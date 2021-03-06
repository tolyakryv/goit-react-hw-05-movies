import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <header className={s.container}>
      <nav className={s.nav}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <NavLink className={s.link} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
};
export default Navigation;
