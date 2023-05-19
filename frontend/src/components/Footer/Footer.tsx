import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { timeLineSlice } from '../../store/reducers/timeLineSlice';
import { instrumentTypes, timeTypes } from '../../types/timeline';

import './Footer.scss';

import { useNavigate } from 'react-router-dom'
import { pageRedirect } from '../../pages/pageRedirect'
export const Footer: React.FC<{ isFooterDisplayed: boolean }> = ({ isFooterDisplayed }) => {
  const { time: timeState, instrument: instrumentState } = useAppSelector(
    (state) => state.timeLineReducer,
  );
  const { changeTime } = timeLineSlice.actions;
  const dispatch = useAppDispatch();
  const currentTimeIndex = Object.values(timeTypes).indexOf(timeState);

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const isFooterDisplayed_ = isFooterDisplayed ?? true;
  const navigate = useNavigate()


  useEffect(() => {
    const isReliefOrEarth = instrumentState === instrumentTypes.relief || instrumentState === instrumentTypes.earth
    let startIndex = isReliefOrEarth ? 4 : 0;

    if (currentTimeIndex !== startIndex && currentTimeIndex !== Object.values(timeTypes).length - 1) {
      setNextButtonDisabled(false)
      setPrevButtonDisabled(false)
    } else if (currentTimeIndex === startIndex) {
      setPrevButtonDisabled(true)
    } else if (currentTimeIndex === Object.values(timeTypes).length - 1) {
      setNextButtonDisabled(true)
    }

  }, [currentTimeIndex, instrumentState])


  const prevTime = () => {
    let prevTimeIndex;
    if (instrumentState === instrumentTypes.relief || instrumentState === instrumentTypes.earth) {
       prevTimeIndex = currentTimeIndex === 4 ? 4 : currentTimeIndex - 1;
    } else {
       prevTimeIndex = currentTimeIndex ? currentTimeIndex - 1 : currentTimeIndex;
    }
    const newTime = Object.values(timeTypes)[prevTimeIndex]

    dispatch(changeTime(newTime));
    navigate(`/${pageRedirect(newTime, instrumentState)}`)
  };

  const nextTime = () => {
    let nextTimeIndex =
        currentTimeIndex === Object.values(timeTypes).length - 1
          ? currentTimeIndex
          : currentTimeIndex + 1;
    const newTime = Object.values(timeTypes)[nextTimeIndex]

    dispatch(changeTime(newTime));
    navigate(`/${pageRedirect(newTime, instrumentState)}`)
  };

  const isFooterDisplayedStyle = (isFooterDisplayedArg) => {
    if (isFooterDisplayedArg) {
      return 'flex';
    }
    return 'none';
  };

  const footerButtonsStyle = {
    display: isFooterDisplayedStyle(isFooterDisplayed_),
  };

  return (
    <div className="buttons" style={footerButtonsStyle}>

      <Button className={prevButtonDisabled ? 'btn-deactivated' : ''} disableRipple={prevButtonDisabled} onClick={prevTime}>
        Что было раньше?
      </Button>

      <Button className={nextButtonDisabled ? 'btn-deactivated' : ''} disableRipple={nextButtonDisabled} onClick={nextTime}>
        Что было дальше?
      </Button>

    </div>
  );
};
