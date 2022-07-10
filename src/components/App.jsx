import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
const HomePage = lazy(() => import('./HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}></Route>
      <Route index element={<HomePage />} />
      <Route path="*" element={<div>OOOOOOOPS</div>}></Route>
    </Routes>
  );
};
