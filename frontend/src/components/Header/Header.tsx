import React, {FC} from 'react';
import { BreadcrumbsComponent } from '../Breadcrumbs/Breadcrumbs';
import { headerDisplayStyles } from '../../types/layoutStyles'
import './Header.scss'

interface IHeaderProps {
  headerDisplayStyle: headerDisplayStyles;
  firstCrumb?: string;
  secondCrumb?: string
}

export const Header: FC<IHeaderProps> = (props)  => {

  const { headerDisplayStyle, firstCrumb, secondCrumb} = props;


  switch (headerDisplayStyle) {
    case 'hide':
      return null

    case 'default':
      return (
        <div className='breadcrumbs'>
          <BreadcrumbsComponent firstCrumb={firstCrumb} secondCrumb={secondCrumb}/>
        </div>
      );

    case 'home':
      return (
          <div className="title no_select">
            <h1>История Земли</h1>
          </div>
      );
  }



}
