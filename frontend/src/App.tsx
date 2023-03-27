import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/app.scss';
import { ArticleListPage } from './pages/ArticlePage/ArticleListPage';
import { VideoPage } from './pages/VideoPage/VideoPage';
import { GalleryPage } from './pages/GalleryPage/GalleryPage';
import { ThreeDEarthPage } from './pages/ThreeDEarthPage/ThreeDEarthPage';
import { ReliefPage } from './pages/ReliefPage/ReliefPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Article } from './components/ToolComponents/Article/Article';


export default function App() {

  const routes = [
    { path: '', element: <HomePage /> },
    { path: '/article', element: <ArticleListPage /> },
    { path: '/article/:name', element: <Article /> },
    { path: '/video', element: <VideoPage /> },
    { path: '/gallery', element: <GalleryPage /> },
    { path: '/threeDEarth', element: <ThreeDEarthPage /> },
    { path: '/relief', element: <ReliefPage /> },
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
