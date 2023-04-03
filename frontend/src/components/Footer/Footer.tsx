import * as React from 'react';

import Button from '@mui/material/Button';

import './Footer.scss';

export const Footer = (props) => {

    const isFooterButtonsLeft = props.isFooterButtonsLeft ?? false
    const isDisplayed = props.isDisplayed ?? true

    const isFooterButtonsLeftWidth = (isFooterButtonsLeft_) => {
        if (isFooterButtonsLeft_) {
            return "50%"
        }
        return "100%"
    }

    const isFooterDisplayed = (isDisplayed_) => {
        if (isDisplayed_) {
            return "flex"
        }
        return "none"
    }

    const footerButtonsStyle = {
        width: isFooterButtonsLeftWidth(isFooterButtonsLeft),
        display: isFooterDisplayed(isDisplayed),
    }

  return (
    <div className='buttons' style={footerButtonsStyle}>
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
