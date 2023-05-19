import React, {FC} from 'react';
import { BreadcrumbsComponent } from '../Breadcrumbs/Breadcrumbs';

interface IHeaderProps {
  isHeaderDisplayed: boolean;
  firstCrumb?: string;
  secondCrumb?: string
}

export const Header: FC<IHeaderProps> = (props)  => {

  const { isHeaderDisplayed, firstCrumb, secondCrumb} = props;

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
      <BreadcrumbsComponent firstCrumb={firstCrumb} secondCrumb={secondCrumb}/>
    </div>

  );
};
