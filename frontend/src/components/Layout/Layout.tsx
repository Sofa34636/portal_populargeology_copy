import * as React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import { LayoutProps } from '../../types/LayoutProps';


export const Layout = (props: { layoutProps: LayoutProps, children?: React.ReactNode }) => {
  return (
    <div>
      <header className="header">
        <Header
          time={props.layoutProps.time} 
          instrument={props.layoutProps.instrument} 
        />
      </header>
      <main>
        { props.children }
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};
