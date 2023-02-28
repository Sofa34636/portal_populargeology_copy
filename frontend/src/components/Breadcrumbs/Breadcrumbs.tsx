import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BreadCrumbsProps } from '../../types/BreadCrumbsProps';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

export default function BreadcrumbsComponent(props: BreadCrumbsProps) {
  return (
    <div role="presentation" className='breadcrumbs-container'>
      <Breadcrumbs aria-label="breadcrumb" className='breadcrumbs'>
        <Link underline="hover" color="white" href="/">
          Главная
        </Link>
        <Link
          underline="hover"
          color="white"
          href="/"
        >
          Время: {props.time}
          <ExpandMoreIcon/>
        </Link>
        <Link
          underline="hover"
          color="white"
          href="/"
        >
          Инструмент: {props.instrument}
          <ExpandMoreIcon/>
        </Link>
      </Breadcrumbs>
    </div>
  );
}