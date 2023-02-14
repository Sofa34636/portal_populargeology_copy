import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export const Header = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="white" href="/">
        MUI
      </Link>
      <Link underline="hover" color="white" href="/material-ui/getting-started/installation/">
        Core
      </Link>
    </Breadcrumbs>
  );
};
