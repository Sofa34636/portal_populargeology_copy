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
        <svg className="fixed max-w-max" width="443" height="449" viewBox="0 0 443 449" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.212 386.673C59.8435 364.931 69.2872 343.913 86.4522 330.498L133.62 293.635C135.943 291.82 137.104 290.912 138.285 290.044C145.307 284.88 152.975 280.656 161.092 277.481C162.457 276.947 163.845 276.45 166.62 275.457L208.536 260.458C239.284 249.456 273.463 262.482 289.09 291.156C303.47 317.542 298.305 350.3 276.505 370.982L247.344 398.646C245.466 400.429 244.527 401.32 243.573 402.178C234.834 410.054 224.773 416.325 213.853 420.704C212.663 421.181 211.449 421.632 209.022 422.534L150.11 444.422C108.611 459.841 63.9929 430.857 61.212 386.673Z" fill="url(#paint0_radial_18_3)" fillOpacity="0.8"></path><path d="M5.59808 130.505C11.3184 117.018 21.656 106.01 34.7573 99.4544L197.924 17.8113C210.53 11.5038 216.833 8.35002 223.439 6.12593C229.306 4.15073 235.343 2.72455 241.474 1.86576C248.377 0.898734 255.425 0.89874 269.52 0.89874L403.976 0.898744C406.32 0.898732 408.66 1.11121 410.966 1.53353C446.741 8.08472 454.661 55.8278 422.918 73.5796L314.453 134.237C309.847 136.813 305.007 138.947 299.997 140.61L81.7514 213.059C31.4209 229.767 -15.1089 179.326 5.59808 130.505Z" fill="url(#paint1_radial_18_3)" fillOpacity="0.8"></path><defs><radialGradient id="paint0_radial_18_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.864 376.937) rotate(61.4109) scale(53.8447 115.548)"><stop stopColor="#FF5C00"></stop><stop offset="0.9999" stopColor="#EE2D01" stopOpacity="0"></stop><stop offset="1" stopColor="#EE2D01" stopOpacity="0"></stop></radialGradient><radialGradient id="paint1_radial_18_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(213.387 109.474) rotate(67.8131) scale(53.8447 249.414)"><stop stopColor="#EE2D01"></stop><stop offset="0.510417" stopColor="#EE2D01" stopOpacity="0.5"></stop><stop offset="1" stopColor="#EE2D01" stopOpacity="0"></stop></radialGradient></defs></svg>
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
