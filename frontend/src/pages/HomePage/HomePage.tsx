import * as React from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { EarthTypeMenu } from '../../components/EarthTypeMenu/EarthTypeMenu';

// import { useTypedSelector } from '../../hooks';
// import { TimeLineState } from '../../types/timeline';

// TODO hover button menu, close menu after mouse leaving
export const HomePage = () => {
  // //////////

  // const store = useTypedSelector((state) => console.log(state));
  // // console.log('time: ', time, 'instrument: ', instrument);

  // // //////////

  const defaultMenuTitle = 'ИСТОРИЯ ЗЕМЛИ';
  const instruments = {
    ВИДЕО: '/video',
    СТАТЬИ: '/article',
    ГАЛЕРЕЯ: '/gallery',
    РЕЛЬЕФ: '/relief',
    '3D ЗЕМЛИ': '/threeDEarth',
  };
  const navigate = useNavigate();
  const [selectedTimeButton, setSelectedTimeButton] = React.useState<
    HTMLButtonElement | HTMLLIElement | null
  >(null);
  const [selectedInstrumentButton, setSelectedInstrumentButton] =
    React.useState<HTMLButtonElement | null>(null);
  const [titleEarthMenu, setTitleEarthMenu] = React.useState<string>(defaultMenuTitle);

  const handleTimeClick = (event: React.MouseEvent<any> | MouseEvent) => {
    if (event.type == 'click') {
      const menuButton: HTMLElement | null = document.getElementById('earth-menu-button'); // EarthTypeMenu.tsx
      const reliefButton: HTMLElement | null = document.getElementById('reliefInstrument');
      const threeDEarthButton: HTMLElement | null = document.getElementById('3dEarthInstrument');
      if (event.currentTarget instanceof HTMLLIElement && event.currentTarget.innerText != '') {
        if (event.currentTarget.innerText != defaultMenuTitle) {
          menuButton.classList.add('btn-selected');
          reliefButton.classList.remove('btn-deactivated', 'btn-selected');
          threeDEarthButton.classList.remove('btn-deactivated', 'btn-selected');
          if (selectedTimeButton != null) {
            selectedTimeButton.classList.remove('btn-selected');
          }
          setSelectedTimeButton(event.currentTarget);
          setTitleEarthMenu(event.currentTarget.innerText);
        }
      } else if (event.currentTarget instanceof HTMLButtonElement) {
        event.currentTarget.classList.add('btn-selected');
        reliefButton.classList.add('btn-deactivated');
        reliefButton.classList.remove('btn-selected');
        threeDEarthButton.classList.add('btn-deactivated');
        threeDEarthButton.classList.remove('btn-selected');
        if (selectedTimeButton != null && selectedTimeButton != event.currentTarget) {
          selectedTimeButton.classList.remove('btn-selected');
        }
        if (
          selectedInstrumentButton == reliefButton ||
          selectedInstrumentButton == threeDEarthButton
        ) {
          setSelectedInstrumentButton(null);
        }
        setSelectedTimeButton(event.currentTarget);
        setTitleEarthMenu(defaultMenuTitle);
        menuButton.classList.remove('btn-selected');
      }
    }
  };

  const handleInstrumentClick = (event: React.MouseEvent<any>) => {
    if (event.type == 'click') {
      if (event.currentTarget instanceof HTMLButtonElement) {
        if (!event.currentTarget.classList.contains('btn-deactivated')) {
          event.currentTarget.classList.add('btn-selected');
        } else if (event.currentTarget.classList.contains('btn-deactivated')) {
          setSelectedInstrumentButton(null);
          return;
        }
        if (selectedInstrumentButton != null && selectedInstrumentButton != event.currentTarget) {
          selectedInstrumentButton.classList.remove('btn-selected');
        }
        setSelectedInstrumentButton(event.currentTarget);
      }
    }
  };

  const handleLearnClick = () => {
    navigate(
      selectedInstrumentButton != null
        ? instruments[selectedInstrumentButton.innerText]
        : instruments['ВИДЕО'],
      {
        state: {
          timeProp: selectedTimeButton != null ? selectedTimeButton.innerText : 'БОЛЬШОЙ ВЗРЫВ',
        },
      },
    );
    // console.log(selectedInstrumentButton)
  };

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
            <Button onClick={handleTimeClick} variant="outlined">
              Большой взрыв
            </Button>
            <Button onClick={handleTimeClick} variant="outlined">
              Солнечная Система
            </Button>
            <Button onClick={handleTimeClick} variant="outlined">
              Образование Луны
            </Button>
            <EarthTypeMenu title={titleEarthMenu} handleClose={handleTimeClick} />
          </div>
        </div>
        <div className="instrument">
          <h2>Выбирай инструмент</h2>
          <div className="instrument_buttons">
            <Button onClick={handleInstrumentClick} variant="outlined">
              видео
            </Button>
            <Button onClick={handleInstrumentClick} variant="outlined">
              статьи
            </Button>
            <Button onClick={handleInstrumentClick} variant="outlined">
              галерея
            </Button>
            <Button
              id="reliefInstrument"
              className="btn-deactivated"
              onClick={handleInstrumentClick}
              variant="outlined">
              рельеф
            </Button>
            <Button
              id="3dEarthInstrument"
              className="btn-deactivated"
              onClick={handleInstrumentClick}
              variant="outlined">
              3d земли
            </Button>
          </div>
        </div>
        <div className="learn">
          <Button onClick={handleLearnClick} variant="outlined">
            Изучать Вселенную
          </Button>
        </div>
      </main>
      <footer className="footer">
        <Button>
          <a href="https://populargeology.ru/about/#">О проекте</a>
        </Button>
        <Button>
          <a href="https://populargeology.ru/about/#">Участники</a>
        </Button>
        <Button>
          <a href="https://populargeology.ru/istochniki/">Источники</a>
        </Button>
      </footer>
    </>
  );
};
