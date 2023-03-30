import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { EarthTypeMenu } from '../../components/EarthTypeMenu/EarthTypeMenu'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { Instrument, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { clsx } from 'clsx';


export const HomePage = () => {

  useEffect(() => {
    dispatch(changeTime(timeTypes.bigBang))
    dispatch(changeInstrument(instrumentTypes.video))
  }, [])

  const {time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const { changeTime, changeInstrument } = timeLineSlice.actions;
  const dispatch = useAppDispatch()

  const navigate = useNavigate();

  const [activeTimeButton, setActiveTimeButton] = useState<Time | null>(timeTypes.bigBang)
  const [activeInstrumentButton, setActiveInstrumentButton] = useState<Instrument | null>(instrumentTypes.video)


  const onTimeButtonClick = (time: Time) => {
    dispatch(changeTime(time))
    setActiveTimeButton(time)

    if (time === activeTimeButton) {
      dispatch(changeTime(timeTypes.bigBang))
      setActiveTimeButton(null)
    }
  }

  const onInstrumentButtonClick = (instrument: Instrument) => {
    dispatch(changeInstrument(instrument))
    setActiveInstrumentButton(instrument)

    if (instrument === activeInstrumentButton) {
      dispatch(changeInstrument(instrumentTypes.video))
      setActiveInstrumentButton(null)
    }
  }

  const onLearnButtonClick = () => {
    navigate(Object.fromEntries(
      Object.entries(instrumentTypes).map(([k,v])=>[v,k])
    )[instrumentState])
  }

  return (
    <>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <header className="header">
          <div className="title no_select">
            <h1>история вселенной</h1>
          </div>
      </header>
      <main className="content">
        <div className="time">
          <h2>Выбирайте время</h2>
          <div className="time_buttons">
            {
              Object.values(timeTypes).slice(0, 3).map((time, index) => {
                return (
                  <Button
                    key = {index}
                    onClick={() => onTimeButtonClick(time)}
                    variant="outlined"
                    className={time === activeTimeButton ? 'btn-selected' : ''}
                  >
                    {time}
                  </Button>
                )
              })
            }
            <EarthTypeMenu onTimeButtonClick={onTimeButtonClick} />
          </div>
        </div>
        <div className="instrument">
          <h2>Выбирайте инструмент</h2>
          <div className="instrument_buttons">
            {
              Object.values(instrumentTypes).map((instrument, index) => {
                let isNonActive = ( instrument === instrumentTypes.relief ||
                                             instrument === instrumentTypes.earth ?
                                             'btn-deactivated':'' );
                let isSelected = instrument === activeInstrumentButton ? 'btn-selected' : '';

                if (Object.values(timeTypes).splice(4).includes(timeState)) {
                  isNonActive = '';
                }

                if (isNonActive) {
                  isSelected = ''
                }

                return (
                  <Button
                    key = {index}
                    onClick={() => onInstrumentButtonClick(instrument)}
                    variant="outlined"
                    className={ clsx(isNonActive, isSelected) }
                  >
                    {instrument}
                  </Button>
                )
              })
            }
          </div>
        </div>
        <div className="learn">
          <Button onClick={onLearnButtonClick} variant="outlined">
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
