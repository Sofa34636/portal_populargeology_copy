import * as React from 'react';

import Button from '@mui/material/Button';

export const Footer = () => {
  return (
    <div>
      <Button className="prevBtn">Что было раньше?</Button>
      <Button className="nextBtn">Что было дальше?</Button>
    </div>
  );
};
