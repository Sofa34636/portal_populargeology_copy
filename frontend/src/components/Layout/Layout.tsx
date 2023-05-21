import React, { FC } from 'react'

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import { LayoutProps } from '../../types/LayoutProps';
import './Layout.scss';

interface ILayoutProps {
  layoutProps: LayoutProps;
  children?: React.ReactNode;
  breadCrumbsFirstCrumb?: string;
  breadCrumbsSecondCrumb?: string;
}

export const Layout: FC<ILayoutProps> = (props) => {

  const { layoutProps, children, breadCrumbsFirstCrumb, breadCrumbsSecondCrumb } = props


  return (
    <div className='layout'>
        <header className="header">
          <Header isHeaderDisplayed={layoutProps.isHeaderDisplayed} firstCrumb={breadCrumbsFirstCrumb} secondCrumb={breadCrumbsSecondCrumb}/>
        </header>
        <main className='content'>
          { children }
        </main>
      <footer className='footer'>
        <Footer isFooterDisplayed={layoutProps.isFooterDisplayed}/>
      </footer>
    </div>
  );
};
