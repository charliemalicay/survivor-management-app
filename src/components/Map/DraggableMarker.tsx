'use client'

import * as React from 'react';


const DraggableMarker = ({ defaultCenter, Marker, Popup, position, setPosition }) => {
    const [draggable, setDraggable] = React.useState(false);
    // const [position, setPosition] = React.useState(defaultCenter);
    const markerRef = React.useRef(null);
    const eventHandlers = React.useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    // setPosition(marker.getLatLng())
                    setPosition([marker.getLatLng().lat, marker.getLatLng().lng])
                }
            },
        }),
        [],
    )
    const toggleDraggable = React.useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable ? 'Marker is draggable' : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    )
}


export default DraggableMarker;
