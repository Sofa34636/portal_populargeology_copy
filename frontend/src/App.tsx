import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './styles/app.scss';
import { ArticleListPage } from './pages/ArticlePages/ArticleListPage/ArticleListPage';
import { VideoPage } from './pages/VideoPage/VideoPage';
import { ExhibitListPage } from './pages/GalleryPages/ExhibitListPage/ExhibitListPage';
import {ExhibitPage} from "./pages/GalleryPages/ExhibitPage/ExhibitPage";
import { EarthPage } from './pages/ThreeDEarthPage/EarthPage/EarthPage';
import { ReliefPage } from './pages/ReliefPages/ReliefPage/ReliefPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ArticlePage } from './pages/ArticlePages/ArticlePage/ArticlePage';

import {
  ArticleScientificPublicationsPage
} from "./pages/ArticlePages/ArticleScientificPublicationsPage/ArticleScientificPublicationsPage";
import { EarthMorePage } from './pages/ThreeDEarthPage/EarthMorePage/EarthMorePage'

export default function App() {

  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/:time/articles', element: <ArticleListPage /> },
    { path: '/:time/articles/:id', element: <ArticlePage /> },
    { path: '/:time/articles/scientificPublications', element: <ArticleScientificPublicationsPage /> },
    { path: '/:time/video', element: <VideoPage /> },
    { path: '/:time/exhibits', element: <ExhibitListPage /> },
    { path: '/:time/exhibits/:id', element: <ExhibitPage /> },
    { path: '/:time/earth', element: <EarthPage /> },
    { path: '/:time/earth/more', element: <EarthMorePage /> },
    { path: '/:time/reconstruction', element: <ReliefPage /> },
    // { path: '/:time/relief/:id', element: <Relief /> },
    { path: '/*', element: <NotFoundPage /> },
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
