import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './styles/app.scss';
import { ArticleListPage } from './pages/ArticlePages/ArticleListPage/ArticleListPage';
import { VideoPage } from './pages/VideoPage/VideoPage';
import { ExhibitListPage } from './pages/GalleryPages/ExhibitListPage/ExhibitListPage';
import {ExhibitPage} from "./pages/GalleryPages/ExhibitPage/ExhibitPage";
import { EarthPage } from './pages/ThreeDEarthPage/EarthPage/EarthPage';
import { LocationListPage } from './pages/ReconstructionPages/LocationListPage/LocationListPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ArticlePage } from './pages/ArticlePages/ArticlePage/ArticlePage';

import {
  ArticleScientificPublicationsPage
} from "./pages/ArticlePages/ArticleScientificPublicationsPage/ArticleScientificPublicationsPage";
import { EarthMorePage } from './pages/ThreeDEarthPage/EarthMorePage/EarthMorePage'
import {ReconstructionListPage} from "./pages/ReconstructionPages/ReconstructionListPage/ReconstructionListPage";
import {ReconstructionPage} from "./pages/ReconstructionPages/ReconstructionPage/ReconstructionPage";
import AboutTheProject from './components/AboutTheProject/AboutTheProject';
import Sources from './components/Sources/Sources';
import Participants from './components/Participants/Participants';

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
    { path: '/:time/reconstruction', element: <LocationListPage /> },
    { path: '/:time/reconstruction/:locationId', element: <ReconstructionListPage /> },
    { path: '/:time/reconstruction/:locationId/:id', element: <ReconstructionPage /> },
    { path: '/*', element: <NotFoundPage /> },
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          {routes.map((obj, i) => {
            return <Route path={obj.path} element={obj.element} key={i} />;
          })}
          <Route path='/aboutTheProject' Component={AboutTheProject} />
          <Route path='/sources' Component={Sources} />
          <Route path='/participants' Component={Participants} />
        </Routes>
        
      </div>
    </div>
  );
}
