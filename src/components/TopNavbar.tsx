'use client';

import * as React from 'react';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import BrandImage from '../assets/images/brand.png';

import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';

import UserAvatarButton from "../widgets/UserAvatarButton";
import UserSettingsMenu from "../widgets/UserSettingsMenu";
import {routersConstants} from "../app/constants";


const TopNavbar = () => {
    const pathname = usePathname();
    const router = useRouter();


    return (
        <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
                <div className="w-1/2 pl-2 flex flex-row gap-x-4 md:pl-0 items-center">
                    <Image src={BrandImage} alt="Brand Image" height="40px" width="40px"  />
                    <Typography className="text-gray-900 text-base xl:text-xl font-bold">
                        Survivors Management App
                    </Typography>

                    {/*<a className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"*/}
                    {/*   href="#">*/}
                    {/*    <Image src={BrandImage} alt="Brand Image" height="50px" width="50px"  />*/}
                    {/*    <Typography>Admin Day Mode</Typography>*/}
                    {/*</a>*/}
                </div>
                <div className="w-1/2 pr-0">
                    <div className="flex relative inline-block float-right">
                        <UserAvatarButton />
                    </div>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20" id="nav-content">
                    <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                        <li className={`flex flex-row gap-x-2 items-center mr-6 my-2 md:my-0 py-1 md:py-3 pl-1
                                        align-middle cursor-pointer hover:border-green-600 hover:text-gray-900
                                        ${pathname === routersConstants.baseRoute ? 
                                        'text-green-600 border-green-600 border-b-2' : 'text-gray-600'}`}
                            onClick={() => router.push(routersConstants.baseRoute)}>
                            <Icon icon="charm:layout-dashboard" width="25" height="25" />
                            <span className="pb-1 md:pb-0 text-sm">Dashboard</span>
                        </li>
                        <li className={`flex flex-row gap-x-2 items-center mr-6 my-2 md:my-0 py-1 md:py-3 pl-1
                                        align-middle cursor-pointer hover:border-green-600 hover:text-gray-900
                                        ${pathname === routersConstants.survivorList ?
                            'text-green-600 border-green-600 border-b-2' : 'text-gray-600'}`}
                            onClick={() => router.push(routersConstants.survivorList)}>
                            <Icon icon="icon-park-outline:view-grid-list" width="25" height="25" />
                            <span className="pb-1 md:pb-0 text-sm">Survivor List</span>
                        </li>
                    </ul>
                    <div className="relative pull-right pl-4 pr-4 md:pr-0">
                        <input type="search" placeholder="Search" className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal" />
                        <div className="absolute search-icon" style={{top: '0.375rem', left: '1.75rem'}}>
                            {/*<svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">*/}
                            {/*    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">{}</path>*/}
                            {/*</svg>*/}
                        </div>
                    </div>
                </div>
            </div>
            <UserSettingsMenu />
        </nav>
    )
}

export default TopNavbar;
