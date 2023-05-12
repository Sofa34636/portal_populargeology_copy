import React from 'react';

import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'
import { instrumentTypes, timeTypes } from '../../types/timeline'

export const Footer: React.FC<{ isFooterDisplayed: boolean}> = ({ isFooterDisplayed}) => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const { changeTime } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    const isFooterDisplayed_ = isFooterDisplayed ?? true

    const prevTime = () => {
      if (instrumentState === instrumentTypes.relief || instrumentState === instrumentTypes.earth) {

      } else {
        let prevTimeIndex = Object.values(timeTypes).indexOf(timeState)-1
        dispatch(changeTime(Object.values(timeTypes)[prevTimeIndex]))
      }

    }

    const nextTime = () => {
      if (instrumentState === instrumentTypes.relief || instrumentState === instrumentTypes.earth) {

      } else {
        let nextTimeIndex = Object.values(timeTypes).indexOf(timeState)+1
        dispatch(changeTime(Object.values(timeTypes)[nextTimeIndex]))
      }
    }

    const isFooterDisplayedStyle = (isFooterDisplayedArg) => {
        if (isFooterDisplayedArg) {
            return "flex"
        }
        return "none"
    }

    const footerButtonsStyle = {
        display: isFooterDisplayedStyle(isFooterDisplayed_),
    }

  return (
    <div className='buttons' style={footerButtonsStyle}>
      <Button className="prevBtn" onClick={prevTime}>Что было раньше?</Button>
      <Button className="nextBtn" onClick={nextTime}>Что было дальше?</Button>
    </div>
  );
};
