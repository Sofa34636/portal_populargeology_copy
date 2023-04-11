import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom'
import { Instrument, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { clsx } from 'clsx';
import { useFetchAllArticlesQuery, useGetArticleByIdQuery } from '../../store/services/ArticleService'
import { CHANGE_TIME, Redirect } from '../../types/redirect'


export default function BreadcrumbsComponent() {

  const navigate = useNavigate();

  const {time, instrument} = useAppSelector((state) => state.timeLineReducer);
  const { changeTime, changeInstrument } = timeLineSlice.actions;
  const dispatch = useAppDispatch()

  const [isOverlayShown, setIsOverlayShown] = useState(false);

  const [isTimeMenuOpen, setIsTimeMenuOpen] = useState(false);
  const [isTimeSubMenuOpen, setIsTimeSubMenuOpen] = useState(false);
  const [isInstrumentMenuOpen, setIsInstrumentMenuOpen] = useState(false);

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

  const redirect = (redirect: Redirect) => {

    const time_path = Object.entries(timeTypes)
          .reduce(
            (switched, [key, value]) =>
              ({
                ...switched,
                [value]: key,
              }),
            {},
          )[redirect.type === "timeLine/changeTime" ? redirect.payload : time];

    const instrument_path = Object.entries(instrumentTypes)
      .reduce(
        (switched, [key, value]) =>
          ({
            ...switched,
            [value]: key,
          }),
        {},
      )[redirect.type === "timeLine/changeInstrument" ? redirect.payload : instrument];

    navigate(`../${instrument_path}/${time_path}`, { replace: true })
  }


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

    redirect(dispatch(changeTime(pickedTime)))
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

    redirect(dispatch(changeInstrument(pickedInstrument)))
  };


  return (
        <div className="container">
          <nav className='menu'>
            <ul className='menu__list'>
              <li>
                <Link to={'/'} className='menu__link no_select'>
                  Главная
                </Link>
                <span className='separator no_select'>/</span>
              </li>
              <li className='no_select'>
                <span>Время: </span>
              </li>
              <li onMouseLeave={(e) => {
                setIsTimeMenuOpen(false)
                setIsTimeSubMenuOpen(false)
                setIsOverlayShown(false)

              }}>
                <span className='menu__link no_select'
                      onMouseEnter={(e) => {
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
                                        onMouseEnter={(e) => {
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
                                            <span
                                              key = {index}
                                              className='sub-sub-menu__link no_select'
                                              onClick={() => changeBreadcrumbsTime(time)}
                                            >
                                              {time}
                                            </span>
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                </li>

                              :
                                <li className='sub-menu__link no_select'>
                                  <span
                                    onMouseLeave={(e) => {
                                      setIsTimeSubMenuOpen(false)
                                    }}
                                    className='sub-menu__link no_select'
                                    onClick={() => changeBreadcrumbsTime(time)}
                                  >{time}</span>
                                </li>
                            }
                          </>
                        )
                      })
                    }
                  </ul>
              </li>
              <li className='no_select'>
                <span>Инструмент: </span>
              </li>
              <li
                onMouseLeave={(e) => {
                  setIsInstrumentMenuOpen(false)
                  setIsOverlayShown(false)
                }}
              >
                <span
                  className='menu__link no_select'
                  onMouseEnter={(e) => {
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

                            className='sub-menu__link no_select'
                          >
                            <span onClick={() => changeBreadcrumbsInstrument(instrument)}>{instrument}</span>
                        </li>
                      )}
                    )}
                </ul>
              </li>
            </ul>
          </nav>
          <div className = {isOverlayShown ? 'overlay' : ''}></div>
        </div>
  );
}
