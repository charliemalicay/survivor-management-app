'use client'

import * as React from 'react';

import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';

import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import {useSelector} from "react-redux";
import {topNavbarState} from "../components/topNavbarSlice";


const UserSettingsMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const topNavbarDataState = useSelector(( state: { topNavbarVarData: topNavbarState }) => state.topNavbarVarData);

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        setAnchorEl(topNavbarDataState.userMenuEvent);
    }, [topNavbarDataState]);

    return (
        <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
             PaperProps={{
                 elevation: 0,
                 sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
}

export default UserSettingsMenu;
