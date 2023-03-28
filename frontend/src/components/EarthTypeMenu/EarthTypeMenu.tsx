import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { historyOfEarth, instrumentTypes, Time, timeTypes } from '../../types/timeline'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'


export const EarthTypeMenu = ({onTimeButtonClick: onTimeButtonClick}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [selectedTime, setSelectedTime] = React.useState<Time>(timeTypes.earthHistory);

  const {time: timeState } = useAppSelector((state) => state.timeLineReducer);

  const handleClickMenuButton = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event)
  };

  const handleClickMenuItem = (
    event: React.MouseEvent<HTMLElement>,
    time: Time,
  ) => {
    setSelectedTime(time);
    onTimeButtonClick(time)
    setAnchorEl(null);
  };

  const handleClose = (e) => {
    console.log(e)
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
      <Button
        id='menu_button'
        variant='outlined'
        // onClick={handleClickMenuButton}
        onMouseEnter={(e) => handleClickMenuButton(e)}
        className={selectedTime === timeState ? 'btn-selected' : ''}
      >
        { selectedTime != timeState ? timeTypes.earthHistory : selectedTime }
      </Button
        >
      <Menu
        anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
        onMouseLeave={(e) => handleClose(e)}
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
