import * as React from 'react';

import Button from '@mui/material/Button';

import './Footer.scss';

export const Footer = (props) => {
    const isLeft = props.isLeft;
  return (
    <div className="buttons">
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
