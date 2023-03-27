

require('file-loader?name=[name].[ext]!./index.html'); // wtf?

import * as React from 'react';

import App from './App';

import './styles/app.scss';

import { store } from './store'

import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

