import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { historyOfEarth, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

// BUGS:
// TODO: При наведении на кнопку история земли, не работает ховер
// TODO: Если навести на кнопку история земли и, не наводя на выплывающее меню убрать мышь - меню не убирается

export const EarthTypeMenu = ({onTimeButtonClick: onTimeButtonClick}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedTime, setSelectedTime] = useState<Time>(timeTypes.earthHistory);
  const {time: timeState } = useAppSelector((state) => state.timeLineReducer);

  const handleClickMenuButton = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClickMenuItem = (
    event: React.MouseEvent<HTMLElement>,
    time: Time,
  ) => {
    setSelectedTime(time);
    handleClose()
    onTimeButtonClick(time)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
      <Button
        id='menu_button'
        variant='outlined'
        onMouseOver={handleClickMenuButton}
        className={selectedTime === timeState ? 'btn-selected' : ''}
      >
        { selectedTime != timeState ? timeTypes.earthHistory : selectedTime }
      </Button
        >
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        className='earth-type-menu'
      >
        {
          Object.values(timeTypes).slice(4).map((time, index) => {
            return (
              <MenuItem
                key={index}
                onClick={(event) => handleClickMenuItem(event, time)}
              ><span>{ time }</span></MenuItem>
            )
          })
        }
      </Menu>
    </div>
  );
}
