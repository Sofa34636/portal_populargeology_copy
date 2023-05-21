import React from 'react';
import Button from '@mui/material/Button';
import { EarthTypeMenu } from '../../components/EarthTypeMenu/EarthTypeMenu'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { Instrument, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { clsx } from 'clsx';
import { Link } from 'react-router-dom'
import { pageRedirect } from '../pageRedirect'
import { Layout } from '../../components/Layout/Layout'

export const HomePage = () => {
  const {time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const { changeTime, changeInstrument } = timeLineSlice.actions;
  const dispatch = useAppDispatch()

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

  useEffect(() => {
    dispatch(changeTime(timeTypes.bigBang))
    dispatch(changeInstrument(instrumentTypes.video))
  }, [])


  return (


    <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'home'} headerDisplayStyle={'home'}>
      <div className={'home-page'}>
        <div className="home-page__background">
          <div className="rect1"></div>
          <div className="rect2"></div>
        </div>
        <div className="home-page__time">
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
        <div className="home-page__instrument">
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
        <div className="home-page__learn">
          <Link to={pageRedirect(timeState, instrumentState)}>
            <Button variant="outlined">
              Изучать Вселенную
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};


