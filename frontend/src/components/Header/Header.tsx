import * as React from 'react';
import BreadcrumbsComponent from '../Breadcrumbs/Breadcrumbs';

export const Header = (props: { time: string, instrument: string }) => {
  return (
    <BreadcrumbsComponent time={props.time} instrument={props.instrument}/>
  );
};
