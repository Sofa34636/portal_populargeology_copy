import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div>
        <h1>Home page</h1>
      </div>
      <div className="time">
        <h2>Выбирай время</h2>
        <div className="time_buttons">
          <Button variant="outlined">Большой взрыв</Button>
          <Button variant="outlined">Солнечная Система</Button>
          <Button variant="outlined">Образование Луны</Button>
          <Button variant="outlined">История Земли</Button>
        </div>
      </div>
      <div className="instrument">
        <h2>Выбирай инструмент</h2>
        <div className="instrument_buttons">
          <Button variant="outlined">видео</Button>
          <Link to="/article">
            <Button variant="outlined">статьи</Button>
          </Link>
          <Button variant="outlined">Галерея</Button>
          <Button variant="outlined">рельеф</Button>
          <Button variant="outlined">3d земли</Button>
        </div>
      </div>
      <div className="learn">
        <Button variant="outlined">Изучать Вселенную</Button>
      </div>
    </>
  );
};
