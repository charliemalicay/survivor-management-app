'use client'

import * as React from 'react';

import {Avatar, Box, Button, Divider, Menu, MenuItem, Tooltip, Typography} from '@mui/material';
import { deepOrange } from '@mui/material/colors';

import ImageOfMe from '../assets/images/imageOfMe.jpg';
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const UserAvatarButton = () => {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu" disableAutoFocus={true} parentPopupState={null}>
            {(popupState) => (
                <React.Fragment>
                    <Tooltip title="Account settings">
                        <Button variant="text" className="flex flex-row gap-x-4 items-center rounded-lg"
                                sx={{ borderRadius: '16px' }} {...bindTrigger(popupState)}>
                            <Avatar alt="Charliemagne Malicay" src={ImageOfMe}
                                    sx={{ width: 32, height: 32, bgcolor: deepOrange[200] }} />

                            <Box className="flex flex-row gap-x-3 items-center">
                                <Typography sx={{ textTransform: 'none', fontSize: '14px', fontWeight: 'light',
                                    color: 'text.secondary' }}>
                                    Hello, Charlie
                                </Typography>
                                <Icon icon="mingcute:down-line" width="25" height="25"  style={{color: '#808080'}} />
                            </Box>
                        </Button>
                    </Tooltip>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                        <MenuItem onClick={popupState.close}>Notifications</MenuItem>
                        <MenuItem onClick={popupState.close}>Settings</MenuItem>
                        <Divider />
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}

export default UserAvatarButton;
