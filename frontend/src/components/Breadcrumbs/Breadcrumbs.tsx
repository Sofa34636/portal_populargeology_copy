import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link} from 'react-router-dom'
import { historyOfEarth, Instrument, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { useState } from 'react'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { clsx } from 'clsx';
import { useNavigate } from "react-router-dom";
import { pageRedirect } from '../../pages/pageRedirect'

export default function BreadcrumbsComponent() {

  const {time, instrument} = useAppSelector((state) => state.timeLineReducer);
  const { changeTime, changeInstrument } = timeLineSlice.actions;
  const dispatch = useAppDispatch()

  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [isTimeMenuOpen, setIsTimeMenuOpen] = useState(false);
  const [isTimeSubMenuOpen, setIsTimeSubMenuOpen] = useState(false);
  const [isInstrumentMenuOpen, setIsInstrumentMenuOpen] = useState(false);

  const [ isEarthTimePicked, setIsEarthTimePicked] = useState(false)
  const [ isEarthOrReliefPicked, setIsEarthOrReliefPicked] = useState(false)


  const [currentTimes, setCurrentTimes] = useState<Time[]>(
    Object.values(timeTypes).slice(0,4).filter((i) => i != time)
  )

  const [currentEarthTimes, setCurrentEarthTimes] = useState<Time[]>(
    Object.values(timeTypes).slice(4).filter((i) => i != time)
  )

  const [currentInstruments, setCurrentInstruments] = useState<Instrument[]>(
    Object.values(instrumentTypes).filter((i) => i != instrument)
  )

  const sortByArray = (arr, sortArr) =>
    [...arr].sort((a, b) => sortArr.indexOf(a) - sortArr.indexOf(b));

  const changeBreadcrumbsTime = (pickedTime: Time) => {

    setCurrentTimes(
      sortByArray(
        Object.values(timeTypes).slice(0,4).filter(i => i != pickedTime),
        Object.values(timeTypes).slice(0,4)
      )
    )

    setCurrentEarthTimes(
      sortByArray(
        Object.values(timeTypes).slice(4).filter(i => i != pickedTime),
        Object.values(timeTypes).slice(4)
      )
    )

    setIsTimeMenuOpen(false)
    setIsOverlayShown(false)

    dispatch(changeTime(pickedTime))
  };


  const changeBreadcrumbsInstrument = (pickedInstrument: Instrument) => {

    setCurrentInstruments(
      sortByArray(
        Object.values(instrumentTypes).filter(i => i != pickedInstrument),
        Object.values(instrumentTypes)
      )
    )

    setIsInstrumentMenuOpen(false)
    setIsOverlayShown(false)

    dispatch(changeInstrument(pickedInstrument))
  };

  useEffect(() => {
    if (instrument === instrumentTypes.earth || instrument === instrumentTypes.relief) {
      setIsEarthOrReliefPicked(true)
    } else {
      setIsEarthOrReliefPicked(false)
    }

    if (historyOfEarth.includes(time)) {
      setIsEarthTimePicked(true)
    } else {
      setIsEarthTimePicked(false)
    }

  }, [time, instrument])



  return (
        <div className="breadcrumbs_container">
          <nav className='menu'>
            <ul className='menu__list'>
              <li className='main'>
                <Link to={'/'} className='menu__link no_select'>
                  Главная
                </Link>
                <span className='separator no_select'>/</span>
              </li>
              <li className='no_select time-span'>
                <span>Время: </span>
              </li>
              <li
                className='current-time'
                onMouseLeave={() => {
                setIsTimeMenuOpen(false)
                setIsTimeSubMenuOpen(false)
                setIsOverlayShown(false)
              }}>
                <span className='menu__link no_select'
                      onMouseEnter={() => {
                        setIsOverlayShown(true)
                        setIsTimeMenuOpen(true)
                      }}
                >
                  {time}
                  <ExpandMoreIcon className='arrow-down'/>
                </span>
                <span className='separator no_select'>/</span>
                <ul className="sub-menu__list left-menu" style={isTimeMenuOpen?{display: 'block'}:null}>
                    {
                      currentTimes.map((time, index) => {

                        return (
                          <>
                            {
                              time === timeTypes.earthHistory

                                ?

                                <li className='sub-menu__link no_select' key={index}>
                                  <span
                                        onMouseEnter={() => {
                                          setIsTimeSubMenuOpen(true)
                                        }}
                                  >
                                    {time}
                                    <ExpandMoreIcon className='arrow-down'/>
                                  </span>

                                  <ul className='sub-sub-menu__list' style={isTimeSubMenuOpen?{display: 'block'}:null}>
                                    {
                                      currentEarthTimes.map((time, index) => {
                                        return (

                                          <li key={index}>
                                            <Link to = {`/${pageRedirect(time, instrument)}`}>
                                            <span
                                              key = {index}
                                              className='sub-sub-menu__link no_select'
                                              onClick={() => changeBreadcrumbsTime(time)}
                                            >
                                              {time}
                                            </span>
                                            </Link>
                                          </li>

                                        )
                                      })
                                    }
                                  </ul>
                                </li>

                              :
                                <li className={clsx('sub-menu__link', 'no_select', isEarthOrReliefPicked ? 'disabled' : '')} key={index}>
                                  <Link to = {`/${pageRedirect(time, instrument)}`}>
                                      <span
                                        onMouseLeave={() => {
                                          setIsTimeSubMenuOpen(false)
                                        }}
                                        className='sub-menu__link no_select'
                                        onClick={() => changeBreadcrumbsTime(time)}
                                      >{time}</span>
                                  </Link>
                                </li>
                            }
                          </>
                        )
                      })
                    }
                  </ul>
              </li>
              <li className='no_select instrument-span'>
                <span>Инструмент: </span>
              </li>
              <li
                className='current-instrument'
                onMouseLeave={() => {
                  setIsInstrumentMenuOpen(false)
                  setIsOverlayShown(false)
                }}
              >
                <span
                  className='menu__link no_select'
                  onMouseEnter={() => {
                    setIsInstrumentMenuOpen(true)
                    setIsOverlayShown(true)
                  }}
                >
                  {instrument}
                  <ExpandMoreIcon className='arrow-down'/>
                </span>
                <ul className={ clsx("sub-menu__list")} style={isInstrumentMenuOpen?{display: 'block'}:null}>
                  {
                    currentInstruments.map((instrument, index) => {
                      return (
                        <li
                            key = {index}

                            className={clsx({'sub-menu__link': true, 'no_select': true,
                            'disabled': (instrument === instrumentTypes.earth || instrument === instrumentTypes.relief) && (!isEarthTimePicked)
                            })}
                          >
                            <Link to = {`/${pageRedirect(time, instrument)}`}>
                              <span onClick={() => changeBreadcrumbsInstrument(instrument)}>{instrument}</span>
                            </Link>
                        </li>
                      )}
                    )}
                </ul>
              </li>
            </ul>
          </nav>
          <div className={clsx('overlay', isOverlayShown?'active':null)}></div>
        </div>
  );
}
