import * as React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import { LayoutProps } from '../../types/LayoutProps';


export const Layout = (props: { layoutProps: LayoutProps, children?: React.ReactNode }) => {
  return (
    <div>
      <header className="header">
        <Header/>
      </header>
      <main>
        { props.children }
      </main>
      <footer className='footer'>
        <Footer isFooterButtonsLeft={props.layoutProps.isFooterButtonsLeft}/>
      </footer>
    </div>
  );
};
