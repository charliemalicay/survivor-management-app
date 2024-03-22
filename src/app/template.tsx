'use client'

import * as React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StoreProvider from "../redux/storeProvider";

import 'tailwindcss/tailwind.css';
import '../../styles/global.css';


const Template = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    const [windowSize, setWindowSize] = React.useState([null, null]);

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <React.Fragment>
            <StoreProvider>
                <QueryClientProvider client={queryClient}>
                    <div className="bg-gray-100 font-sans leading-normal tracking-normal" style={{ height: `${windowSize[1]}px`, minHeight: "100vh" }}>
                        {children}
                    </div>
                </QueryClientProvider>
            </StoreProvider>
        </React.Fragment>
    )
}

export default Template;
