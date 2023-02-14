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
    { path: '/about', element: <About /> },
    { path: '/participants', element: <ParticipantsPage /> },
    { path: '/sources', element: <SourcesPage /> },
    { path: '/article', element: <ArticlePage /> },
    { path: '/*', element: <NotFound /> },
  ];

  return (
    <div className="App">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="wrapper">
        <header className="header">
          <Link to="">
            <div className="title">
              <h1>история вселенной</h1>
            </div>
          </Link>
        </header>
        <main className="content">
          <Routes>
            {routes.map((obj, i) => {
              return <Route path={obj.path} element={obj.element} key={i} />;
            })}
          </Routes>
        </main>
      </div>
      <footer className="footer">
        <Link to="/about">
          <Button>О проекте</Button>
        </Link>
        <Link to="/participants">
          <Button>Участники</Button>
        </Link>
        <Link to="/sources">
          <Button>Источники</Button>
        </Link>
      </footer>
    </div>
  );
}
