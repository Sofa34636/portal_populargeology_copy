// require('file-loader?name=[name].[ext]!./index.html'); // ?

import React from 'react'

import App from './App';

import './styles/app.scss';

import { setupStore } from './store';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const store = setupStore();
const root = createRoot(document.getElementById('root') as HTMLElement);
const persistor = persistStore(store);


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
