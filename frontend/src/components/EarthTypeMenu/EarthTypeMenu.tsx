import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { historyOfEarth } from '../../types/timeline';


export const EarthTypeMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [title, setTitle] = React.useState<string>("История Земли")
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<any>) => {
    if (event.type == 'click' && event.currentTarget.innerText != '') {
        setTitle(event.currentTarget.innerText)
        const button: HTMLElement | null = document.getElementById('earth-menu-button')
        if (title != 'История Земли'.toUpperCase()) {
            if (!button.classList.contains('btn-selected')) {
                button.classList.add('btn-selected')
            }
        } else if (title == 'История Земли'.toUpperCase()) {
            button.classList.remove('btn-selected')
        }
    }
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
      <Button
        id="earth-menu-button"
        variant='outlined'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleOpen}
      >
        { title }
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose,
        }}
      >
       {
        historyOfEarth.map((type, index) => {
            return (
                <MenuItem key={index} onClick={handleClose}><span>{ type }</span></MenuItem>
            )
        })
       } 
      </Menu>
    </div>
  );
}
