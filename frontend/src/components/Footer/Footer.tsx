import React from 'react';

import Button from '@mui/material/Button';

export const Footer: React.FC<{ isFooterDisplayed: boolean}> = ({ isFooterDisplayed}) => {


    const isFooterDisplayed_ = isFooterDisplayed ?? true


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
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
