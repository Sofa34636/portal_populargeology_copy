import * as React from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { EarthTypeMenu } from '../../components/EarthTypeMenu/EarthTypeMenu';


export const Home = () => {
  return (
    <>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <header className="header">
        <Link to="">
          <div className="title">
            <h1>история вселенной</h1>
          </div>
        </Link>
      </header>
      <main className="content">
        <div className="time">
          <h2>Выбирай время</h2>
          <div className="time_buttons">
            <Button variant="outlined">Большой взрыв</Button>
            <Button variant="outlined">Солнечная Система</Button>
            <Button variant="outlined">Образование Луны</Button>
            <EarthTypeMenu/>
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
      </main>
      <footer className="footer">
        <Link to="/about">
          <Button>О проекте</Button>
        </Link>
        <Link to="/participants">
          <Button>Участники</Button>
        </Link>
        <Link to="/sources">
          <Button>Источники</Button>
        </Link>
      </footer>
    </>
  );
};
