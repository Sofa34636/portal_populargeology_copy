import * as React from 'react';
import Button from '@mui/material/Button';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';


export const ArticleSourcesMenu: React.FC<{reference: string; magazine: string}> = ({ reference, magazine}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='sources--menu'>
            <Button
                variant='text'
                id="sources-button"
                aria-controls={open ? 'sources-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <h5>Источники</h5>
                {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </Button>
            <Menu
                id="sources-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transitionDuration={0}
                MenuListProps={{
                    'aria-labelledby': 'sources-button',
                }}
            >
                <MenuItem className='sources-menu_item' onClick={handleClose}>
                    <div className='sources-menu_item__title'><h5>Статья:</h5></div>
                    <div className='sources-menu_item__ref' >
                        <a  href="https://sciencedaily.com">{reference}</a>
                    </div>
                </MenuItem>
                <MenuItem className='sources-menu_item' onClick={handleClose}>
                    <div className='sources-menu_item__title'><h5>Журнал:</h5></div>
                    <div className='sources-menu_item__journal'>{magazine}</div>
                </MenuItem>
            </Menu>
        </div>
    );
}