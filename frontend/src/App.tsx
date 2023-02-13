import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                История Земли
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
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
