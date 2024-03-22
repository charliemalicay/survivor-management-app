'use client'

import * as React from 'react';

import { Icon } from '@iconify/react';


const DashboardCard = ({ cardTitle, iconString, iconColor, cardValue }) => {
    return (
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                    <div className="flex-shrink pr-4">
                        <div className={`rounded p-3 ${iconColor}`}>
                            <Icon icon={iconString} width="25" height="25" style={{color: 'white'}} />
                        </div>
                    </div>
                    <div className="flex-1 text-right md:text-center">
                        <h5 className="font-bold uppercase text-gray-500">{cardTitle}</h5>
                        <h3 className="font-bold text-3xl flex flex-row justify-center items-center gap-x-4">
                            {cardValue}
                            <span className="text-green-500">
                                <Icon icon="ph:caret-up-fill" width="25" height="25"/>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;
