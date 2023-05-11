import React, { useState } from 'react'

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import { LayoutProps } from '../../types/LayoutProps';
import './Layout.scss';
import { clsx } from 'clsx';

export const Layout = (props: { layoutProps: LayoutProps, children?: React.ReactNode }) => {


  return (
    <div className='layout'>
        <header className="header">
          <Header isHeaderDisplayed={props.layoutProps.isHeaderDisplayed}/>
        </header>
        <main className='content'>
          { props.children }
        </main>
      <footer className='footer'>
        <Footer isFooterDisplayed={props.layoutProps.isFooterDisplayed}/>
      </footer>
    </div>
  );
};
