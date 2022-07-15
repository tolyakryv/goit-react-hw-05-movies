import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
};
export default Navigation;
