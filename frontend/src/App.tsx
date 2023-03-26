import React, {Component, useEffect} from 'react';
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from '@mui/material/Button';
import { Provider } from 'react-redux';
import './styles/app.scss';
import { ArticleListPage } from './pages/ArticlePage/ArticleListPage';
import { VideoPage } from './pages/VideoPage/VideoPage';
import { GalleryPage } from './pages/GalleryPage/GalleryPage';
import { ThreeDEarthPage } from './pages/ThreeDEarthPage/ThreeDEarthPage';
import { ReliefPage } from './pages/ReliefPage/ReliefPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Article } from './components/ToolComponents/Article/Article';
// import { store } from './store';

export default function App() {
  const routes = [
    { path: '', element: <HomePage /> },
    { path: '/article/', element: <ArticleListPage /> },
    { path: '/article/:name', element: <Article /> },
    { path: '/video', element: <VideoPage /> },
    { path: '/gallery', element: <GalleryPage /> },
    { path: '/threeDEarth', element: <ThreeDEarthPage /> },
    { path: '/relief', element: <ReliefPage /> },
    { path: '/*', element: <NotFoundPage /> },
  ];

  // useEffect(() => {
  //   const apiUrl = 'http://127.0.0.1:8000/api/article/1/';
  //   fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //
  // }, [])



  return (
    <div className="App">
      <div className="wrapper">
        {/* <Provider store={store}> */}
        <Routes>
          {routes.map((obj, i) => {
            return <Route path={obj.path} element={obj.element} key={i} />;
          })}
        </Routes>
        {/* </Provider> */}
      </div>
    </div>
  );
}
