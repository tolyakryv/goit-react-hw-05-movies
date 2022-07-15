import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
const HomePage = lazy(() => import('./HomePage/index'));
const Movies = lazy(() => import('./Movies/index.js'));
const MovieDetails = lazy(() => import('./MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
      </Route>

      <Route path="*" element={<div>OOOOOOOPS</div>}></Route>
    </Routes>
  );
};
