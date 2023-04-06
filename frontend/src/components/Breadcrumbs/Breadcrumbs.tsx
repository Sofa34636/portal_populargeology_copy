import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { Instrument, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { clsx } from 'clsx';
import { useFetchAllArticlesQuery, useGetArticleByIdQuery } from '../../store/services/ArticleService'


export default function BreadcrumbsComponent() {

  const navigate = useNavigate();

  const {time, instrument} = useAppSelector((state) => state.timeLineReducer);
  const { changeTime, changeInstrument } = timeLineSlice.actions;
  const dispatch = useAppDispatch()

  const [breadcrumbsTime, setBreadcrumbsTime] = useState<Time>(time);
  const [breadcrumbsInstrument, setBreadcrumbsInstrument] = useState<Instrument>(instrument);
  const [isOverlayShown, setIsOverlayShown] = useState(false);

  const [isTimeMenuOpen, setIsTimeMenuOpen] = useState(false);
  const [isTimeSubMenuOpen, setIsTimeSubMenuOpen] = useState(false);
  const [isInstrumentMenuOpen, setIsInstrumentMenuOpen] = useState(false);

  const [availableTimes, setAvailableTimes] = useState<Time[]>(
    Object.values(timeTypes).slice(0,4).filter((time) => time != breadcrumbsTime)
  )

  const [availableEarthTimes, setAvailableEarthTimes] = useState<Time[]>(
    Object.values(timeTypes).slice(4).filter((time) => time != breadcrumbsTime)
  )

  const [availableInstruments, setAvailableInstruments] = useState<Instrument[]>(
    Object.values(instrumentTypes).filter((instrument) => instrument != breadcrumbsInstrument)
  )


  const changeBreadcrumbsTime = (time: Time) => {

    const isCurrentEarthTime = availableEarthTimes.includes(breadcrumbsTime);
    const isPickedEarthTime = availableEarthTimes.includes(time)

    setAvailableTimes([
      ...availableTimes.filter(i => i != time),
    ])

    setAvailableEarthTimes([
      ...availableEarthTimes.filter(i => i != time)
    ])
    //
    // if (!isCurrentEarthTime && !isPickedEarthTime) {
    //   setAvailableTimes([
    //     ...availableTimes.filter(i => i != time),
    //     breadcrumbsTime
    //   ])
    // } else if (!isCurrentEarthTime && isPickedEarthTime) {
    //   setAvailableTimes([
    //     ...availableTimes.filter(i => i != time),
    //     breadcrumbsTime
    //   ])
    //
    // } else if (isCurrentEarthTime && !isPickedEarthTime) {
    //   setAvailableEarthTimes([
    //     ...availableEarthTimes.filter(i => i != time),
    //     breadcrumbsTime
    //   ])
    //
    // } else if (isCurrentEarthTime && isPickedEarthTime) {
    //   setAvailableEarthTimes([
    //     ...availableEarthTimes.filter(i => i != time),
    //     breadcrumbsTime,
    //   ])
    // }

    setBreadcrumbsTime(time)
    dispatch(changeTime(time))
    setIsTimeMenuOpen(false)
    setIsOverlayShown(false)


    const time_path = Object.entries(timeTypes)
      .reduce(
        (switched, [key, value]) =>
          ({
            ...switched,
            [value]: key,
          }),
        {},
      )[time];

    const instrument_path = Object.entries(instrumentTypes)
      .reduce(
        (switched, [key, value]) =>
          ({
            ...switched,
            [value]: key,
          }),
        {},
      )[instrument];
    navigate(`../${instrument_path}/${time_path}`, { replace: true })
  };



  const changeBreadcrumbsInstrument = (instrument: Instrument) => {
    const prevIndex = availableInstruments.indexOf(instrument);
    setAvailableInstruments([
      ...availableInstruments.slice(0,prevIndex).filter(i => i != instrument),
      breadcrumbsInstrument,
      ...availableInstruments.slice(prevIndex).filter(i => i != instrument)
    ])
    setBreadcrumbsInstrument(instrument)
    dispatch(changeInstrument(instrument))
    setIsInstrumentMenuOpen(false)
    setIsOverlayShown(false)

    const time_path = Object.entries(timeTypes)
      .reduce(
        (switched, [key, value]) =>
          ({
            ...switched,
            [value]: key,
          }),
        {},
      )[time];

    const instrument_path = Object.entries(instrumentTypes)
      .reduce(
        (switched, [key, value]) =>
          ({
            ...switched,
            [value]: key,
          }),
        {},
      )[instrument];
    navigate(`../${instrument_path}/${time_path}`, { replace: true })
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
                  {breadcrumbsTime}
                  <ExpandMoreIcon className='arrow-down'/>
                </span>
                <span className='separator no_select'>/</span>
                <ul className="sub-menu__list left-menu" style={isTimeMenuOpen?{display: 'block'}:null}>
                    {
                      availableTimes.map((time, index) => {

                        return (
                          <>
                            {
                              time === timeTypes.earthHistory

                                ?

                                <li className='sub-menu__link no_select'>
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
                                      availableEarthTimes.map((time, index) => {
                                        return (
                                          <li>
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
                  {breadcrumbsInstrument}
                  <ExpandMoreIcon className='arrow-down'/>
                </span>
                <ul className={ clsx("sub-menu__list")} style={isInstrumentMenuOpen?{display: 'block'}:null}>
                  {
                    availableInstruments.map((instrument, index) => {
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
