import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../../hooks/redux'


export default function BreadcrumbsComponent() {

  const {time, instrument} = useAppSelector((state) => state.timeLineReducer);

  return (
    <div role="presentation" className="breadcrumbs-container">
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link underline="hover" color="white" href="/">
          Главная
        </Link>
        <Link underline="hover" color="white" href="/">
          Время: {time}
          <ExpandMoreIcon />
        </Link>
        <Link underline="hover" color="white" href="/">
          Инструмент: {instrument}
          <ExpandMoreIcon />
        </Link>
      </Breadcrumbs>
    </div>
  );
}
