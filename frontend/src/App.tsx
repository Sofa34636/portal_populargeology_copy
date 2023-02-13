import * as React from 'react';

import Button from '@mui/material/Button';

export default function App() {
  return (
    <div className="App">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="wrapper">
        <header className="header">
          <div className="title">
            <h1>история вселенной</h1>
          </div>
        </header>
        <main className="content">
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
              <Button variant="outlined">статьи</Button>
              <Button variant="outlined">Галерея</Button>
              <Button variant="outlined">рельеф</Button>
              <Button variant="outlined">3d земли</Button>
            </div>
          </div>
          <div className="learn">
            <Button variant="outlined">Изучать Вселенную</Button>
          </div>
        </main>
      </div>
      <footer className="footer">
        <Button>О проекте</Button>
        <Button>Участники</Button>
        <Button>Источники</Button>
      </footer>
    </div>
  );
}
