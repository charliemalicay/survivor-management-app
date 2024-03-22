'use client'

import * as React from 'react';
import {Box, Typography} from "@mui/material";
import {Icon} from "@iconify/react";


const DashboardPercentageCard = ({ label, percentageValue, iconColor, borderColor, icon }) => {
    return (
        <Box className={`w-2/4 p-4 flex flex-col justify-center items-center gap-y-4
            border border-solid ${borderColor} rounded-lg`}>
            <Box className="flex flex-row items-center gap-x-4">
                <span className={`text-white rounded p-3 ${iconColor}`}>
                    <Icon icon={icon} width="50" height="50"/>
                </span>
                <Typography variant="h4">
                    {percentageValue} %
                </Typography>
            </Box>
            <Typography variant="subtitle1" className="uppercase font-semibold subpixel-antialiased text-gray-500">
                {label}
            </Typography>
        </Box>
    )
}

export default DashboardPercentageCard;
