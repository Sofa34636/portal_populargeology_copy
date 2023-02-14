require('file-loader?name=[name].[ext]!./index.html');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import './styles/app.scss';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>,);
