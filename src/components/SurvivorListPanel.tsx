'use client'

import * as React from 'react';
import {Box} from "@mui/material";
import ListPanel from "./ListPanel";


const SurvivorListPanel = () => {
    return (
        <Box className="container w-full min-h-screen mx-auto pt-24">
            <div className="w-full px-4 pt-8 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <ListPanel />
            </div>
        </Box>
    );
}

export default SurvivorListPanel;
