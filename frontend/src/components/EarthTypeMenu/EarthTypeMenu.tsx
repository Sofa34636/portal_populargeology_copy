import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { historyOfEarth } from '../../types/timeline';


export const EarthTypeMenu = (props: { handleClose: (event: React.MouseEvent<any> | MouseEvent) => void, title: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseMenu = (event: React.MouseEvent<any> | MouseEvent) => {
    props.handleClose(event)
    setAnchorEl(null)
  }

  React.useEffect(() => {
    window.addEventListener('click', handleCloseMenu)

    return () => {
      window.removeEventListener('click', handleCloseMenu)
    }
  }, [handleCloseMenu])

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
        { props.title }
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleCloseMenu,
        }}
      >
       {
        historyOfEarth.map((type, index) => {
            return (
              <MenuItem key={index} onClick={handleCloseMenu}><span>{ type }</span></MenuItem>
            )
        })
       } 
      </Menu>
    </div>
  );
}
