import * as React from 'react';
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import './styles/app.scss';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';
import { VideoPage } from './pages/VideoPage/VideoPage';
import { GalleryPage } from './pages/GalleryPage/GalleryPage';
import { ThreeDEarth } from './pages/ThreeDEarthPage/ThreeDEarth';
import { ReliefPage } from './pages/ReliefPage/ReliefPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFound } from './pages/NotFoundPage/NotFoundPage';

export default function App() {
  const routes = [
    { path: '', element: <HomePage /> },
    { path: '/article', element: <ArticlePage /> },
    { path: '/video', element: <VideoPage />},
    { path: '/gallery', element: <GalleryPage /> },
    { path: '/threeDEarth', element: <ThreeDEarth /> },
    { path: '/relief', element: <ReliefPage /> },
    { path: '/*', element: <NotFound /> },
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          {routes.map((obj, i) => {
            return <Route path={obj.path} element={obj.element} key={i} />;
          })}
        </Routes>
      </div>
    </div>
  );
}
