import * as React from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { EarthTypeMenu } from '../../components/EarthTypeMenu/EarthTypeMenu';


export const Home = () => {
  const defaultMenuTitle = 'ИСТОРИЯ ЗЕМЛИ'
  const [selectedTime, setSelectedTime] = React.useState<HTMLButtonElement | null>(null)
  const [selectedInstrument, setSelectedInstrument] = React.useState<HTMLButtonElement | null>(null)
  const [titleEarthMenu, setTitleEarthMenu] = React.useState<string>(defaultMenuTitle)

  const handleTimeClick = (event: React.MouseEvent<any> | MouseEvent) => {
    if (event.type == 'click') {
      const menuButton: HTMLElement | null = document.getElementById('earth-menu-button') // EarthTypeMenu.tsx
      const reliefButton: HTMLElement | null = document.getElementById('reliefInstrument')
      const threeDEarthButton: HTMLElement | null = document.getElementById('3dEarthInstrument')
      if (event.currentTarget instanceof HTMLLIElement && event.currentTarget.innerText != '') {
        if (event.currentTarget.innerText != defaultMenuTitle) {
          menuButton.classList.add('btn-selected')
          reliefButton.classList.remove('btn-deactivated', 'btn-selected')
          threeDEarthButton.classList.remove('btn-deactivated', 'btn-selected')
          if (selectedTime != null) {
            selectedTime.classList.remove('btn-selected')
          }
        setSelectedTime(null)
        setTitleEarthMenu(event.currentTarget.innerText)
        }
      } else if (event.currentTarget instanceof HTMLButtonElement) {
        event.currentTarget.classList.add('btn-selected')
        reliefButton.classList.add('btn-deactivated')
        reliefButton.classList.remove('btn-selected')
        threeDEarthButton.classList.add('btn-deactivated')
        threeDEarthButton.classList.remove('btn-selected')
        if (selectedTime != null && selectedTime != event.currentTarget) {
            selectedTime.classList.remove('btn-selected')
        }
        setSelectedTime(event.currentTarget)
        setTitleEarthMenu(defaultMenuTitle)
        menuButton.classList.remove('btn-selected')
      }
    }
  }

  const handleInstrumentClick = (event: React.MouseEvent<any>) => {
    if (event.type == 'click') {
      if (event.currentTarget instanceof HTMLButtonElement) {
        if (!event.currentTarget.classList.contains('btn-deactivated')) {
          event.currentTarget.classList.add('btn-selected')
        }
        if (selectedInstrument != null && selectedInstrument != event.currentTarget) {
          selectedInstrument.classList.remove('btn-selected')
        }
        setSelectedInstrument(event.currentTarget)
      }
    }
  }
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
            <Button onClick={handleTimeClick} variant="outlined">Большой взрыв</Button>
            <Button onClick={handleTimeClick} variant="outlined">Солнечная Система</Button>
            <Button onClick={handleTimeClick} variant="outlined">Образование Луны</Button>
            <EarthTypeMenu title={titleEarthMenu} handleClose={handleTimeClick}/>
          </div>
        </div>
        <div className="instrument">
          <h2>Выбирай инструмент</h2>
          <div className="instrument_buttons">
            <Button onClick={handleInstrumentClick} variant="outlined">видео</Button>
            {/* <Link to="/article"> */}
            <Button onClick={handleInstrumentClick} variant="outlined">статьи</Button>
            {/* </Link> */}
            <Button onClick={handleInstrumentClick} variant="outlined">Галерея</Button>
            <Button id='reliefInstrument' className='btn-deactivated' onClick={handleInstrumentClick} variant="outlined">рельеф</Button>
            <Button id='3dEarthInstrument' className='btn-deactivated' onClick={handleInstrumentClick} variant="outlined">3d земли</Button>
          </div>
        </div>
        <div className="learn">
          <Button variant="outlined">Изучать Вселенную</Button>
        </div>
      </main>
      <footer className="footer">
        <Button><a href='https://populargeology.ru/about/#'>О проекте</a></Button>
        <Link to="/participants">
          <Button>Участники</Button>
        </Link>
        <Button><a href='https://populargeology.ru/istochniki/'>Источники</a></Button>
      </footer>
    </>
  );
};
