import * as React from 'react';

import Button from '@mui/material/Button';

import './Footer.scss';

export const Footer = (props) => {

    const isFooterButtonsLeft = props.isFooterButtonsLeft;

  return (
    <div className='buttons' style={ isFooterButtonsLeft ? {width: "50%"} : {width: "100%"}}>
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
