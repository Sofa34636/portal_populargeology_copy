import * as React from 'react';

import Button from '@mui/material/Button';

export const Footer = () => {
  return (
    <div className='footer_not_home'>
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
