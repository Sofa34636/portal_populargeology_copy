import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Time, timeTypes } from '../../types/timeline'
import { useAppSelector } from '../../hooks/redux'
import './EarthTypeMenu.scss'
import { clsx } from 'clsx'

export const EarthTypeMenu = ({onTimeButtonClick: onTimeButtonClick}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Time>(timeTypes.earthHistory)
  const {time} = useAppSelector((state) => state.timeLineReducer);
  const changeEarthTime = (earthTime: Time) => {
    onTimeButtonClick(earthTime)
    setIsMenuOpen(false)
    setSelectedTime(earthTime);
  }

  return (
    <div className='earth-time-dropdown'
         onMouseLeave={() => {
           setIsMenuOpen(false)
         }}
    >
      <Button
        disableRipple
        variant='outlined'
        className = { clsx("earth-time-dropdown__btn", selectedTime === time ? 'btn-selected' : '') }
        onMouseEnter={() => {
          setIsMenuOpen(true)
        }}
      >
        { selectedTime != time ? timeTypes.earthHistory : selectedTime }
      </Button>
      <ul className='earth-time-dropdown__content' style={ isMenuOpen ? {display: 'block'} : null}>
        {
          Object.values(timeTypes).slice(4).map((earthTime, index) => {
            return (
              <li key={index}>
                <span onClick={() => changeEarthTime(earthTime)}>
                  {earthTime}
                </span>
              </li>
            )
          })

        }
      </ul>

    </div>
  );
}
