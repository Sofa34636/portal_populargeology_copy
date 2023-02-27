import * as React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import { LayoutProps } from '../../types/LayoutProps';

export const Layout = (props: LayoutProps) => {
  return (
    <div>
      <header className="header">
        <Header
          time={props.time} 
          instrument={props.instrument} 
        />
      </header>
      <main className="content"></main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};
