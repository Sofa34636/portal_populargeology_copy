import * as React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';

export const Layout = () => {
  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <main className="content"></main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};
