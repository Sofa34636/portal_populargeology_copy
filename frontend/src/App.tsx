import * as React from 'react';
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import { NotFound } from './pages/NotFoundPage/NotFoundPage';
import { About } from './pages/AboutPage/AboutPage';
import { ParticipantsPage } from './pages/ParticipantsPage/ParticipantsPage';
import { SourcesPage } from './pages/SourcesPage/SourcesPage';

import Button from '@mui/material/Button';

import './styles/app.scss';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';

export default function App() {
  const routes = [
    { path: '', element: <Home /> },
    // { path: '/about', element: <About /> },
    { path: '/participants', element: <ParticipantsPage /> },
    // { path: '/sources', element: <SourcesPage /> },
    { path: '/article', element: <ArticlePage /> },
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
