import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import { LayoutProps } from '../../types/LayoutProps';
import './Layout.scss';

export const Layout = (props: { layoutProps: LayoutProps, children?: React.ReactNode }) => {
  return (
    <div className='layout'>
        <header className="header">
          <Header/>
        </header>
        <main className='content'>
          { props.children }
        </main>
      <footer className='footer'>
        <Footer isFooterButtonsLeft={props.layoutProps.isFooterButtonsLeft} isFooterDisplayed={props.layoutProps.isFooterDisplayed}/>
      </footer>
    </div>
  );
};
