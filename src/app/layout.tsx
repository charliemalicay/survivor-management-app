import * as React from 'react';

import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Survivors Management App',
}

export default function RootLayout(
    { children, }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
        </head>
        <body>
        {/*<CustomProvider>*/}
        {children}
        {/*</CustomProvider>*/}
        </body>
        </html>
    )
}
