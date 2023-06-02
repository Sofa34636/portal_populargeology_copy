import React, { FC } from 'react'

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/app.scss';
import './Layout.scss';
import { Instrument, Time } from '../../types/timeline'
import { footerDisplayStyles, headerDisplayStyles } from '../../types/layoutStyles'

interface ILayoutProps {
  time: Time;
  instrument: Instrument;
  children?: React.ReactNode;
  breadCrumbsFirstCrumb?: string;
  breadCrumbsSecondCrumb?: string;
  footerDisplayStyle: footerDisplayStyles;
  headerDisplayStyle: headerDisplayStyles;
  videoTimeAgo?: string;
}

export const Layout: FC<ILayoutProps> = (props) => {

  const {
    children,
    breadCrumbsFirstCrumb,
    breadCrumbsSecondCrumb,
    footerDisplayStyle,
    headerDisplayStyle,
    videoTimeAgo,
  } = props


  return (
    <div className='layout'>
        <header className="header">
          <Header headerDisplayStyle={headerDisplayStyle} firstCrumb={breadCrumbsFirstCrumb} secondCrumb={breadCrumbsSecondCrumb}/>
        </header>
        <main className='content'>
          { children }
        </main>
      <footer className='footer'>
        <Footer footerDisplayStyle={footerDisplayStyle} videoTimeAgo={videoTimeAgo}/>
      </footer>
    </div>
  );
};
