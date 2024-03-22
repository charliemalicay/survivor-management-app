'use client'

import * as React from 'react';

import * as ReactLeaflet from 'react-leaflet';


const SetMapAutoView = ({lat,lng}) => {
    const map = ReactLeaflet.useMap();
    React.useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
}

export default SetMapAutoView;
