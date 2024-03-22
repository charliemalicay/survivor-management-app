'use client';

import * as React from 'react';

import {Container} from "@mui/material";
import TopNavbar from "../components/TopNavbar";
import DashboardPanel from "../components/DashboardPanel";
import Footer from "../components/Footer";


const Page = () => {

    return (
        <Container maxWidth={false} style={{ padding: 0 }}>
            <TopNavbar />
            <DashboardPanel />
            <Footer />
        </Container>
    )
}

export default Page;
