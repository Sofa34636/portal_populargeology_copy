import React from 'react';

import Button from '@mui/material/Button';

export const Footer: React.FC<{ isFooterDisplayed: boolean, isFooterButtonsLeft: boolean }> = ({ isFooterDisplayed, isFooterButtonsLeft }) => {

    const isFooterButtonsLeft_ = isFooterButtonsLeft ?? false
    const isFooterDisplayed_ = isFooterDisplayed ?? true

    const isFooterButtonsLeftWidth = (isFooterButtonsLeftArg) => {
        if (isFooterButtonsLeftArg) {
            return "50%"
        }
        return "100%"
    }

    const isFooterDisplayedStyle = (isFooterDisplayedArg) => {
        if (isFooterDisplayedArg) {
            return "flex"
        }
        return "none"
    }

    const footerButtonsStyle = {
        width: isFooterButtonsLeftWidth(isFooterButtonsLeft_),
        display: isFooterDisplayedStyle(isFooterDisplayed_),
    }

  return (
    <div className='buttons' style={footerButtonsStyle}>
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
