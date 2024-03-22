'use client'

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


const MaterialUIProviders = ({ children }: { children: React.ReactNode }) => {
    return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
}


export default MaterialUIProviders;
