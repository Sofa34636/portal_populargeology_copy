import React from 'react';
import BreadcrumbsComponent from '../Breadcrumbs/Breadcrumbs';

export const Header: React.FC<{ isHeaderDisplayed: boolean}> = ({ isHeaderDisplayed})  => {

  const isHeaderDisplayed_ = isHeaderDisplayed ?? true


  const isHeaderDisplayedStyle = (isHeaderDisplayedArg) => {
    if (isHeaderDisplayedArg) {
      return "flex"
    }
    return "none"
  }

  const headerStyle = {
    display: isHeaderDisplayedStyle(isHeaderDisplayed_),
  }

  return (
    <div className='breadcrumbs' style={headerStyle}>
      <BreadcrumbsComponent />
    </div>

  );
};
