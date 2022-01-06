import React, { Component, useEffect } from 'react';

import PageBox from './PageBox';
import { useSpaceApiContext } from '../contexts/spaceapi-state'

const HomePosition = (props) => {

    const spaceApiState = useSpaceApiContext()

    const address = spaceApiState.location ? spaceApiState.location.address : ""
    const phone = spaceApiState.contact ? spaceApiState.contact.phone : ""

    useEffect(() => {
        if (spaceApiState.location !== undefined && !L.DomUtil.get('map').className.includes('leaflet-container')){
            let map = L.map('map').setView([ spaceApiState.location.lat, spaceApiState.location.lon ], 10);
            L.tileLayer('https://a.tile.openstreetmap.de/{z}/{x}/{y}.png ', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            var marker = L.marker([ spaceApiState.location.lat, spaceApiState.location.lon ]).addTo(map);
        }
    }, [spaceApiState]);

    const pos = spaceApiState.location ? {lat: spaceApiState.location.lat, lon: spaceApiState.location.lon} : {lat: 0, lon: 0}

    return (
        <PageBox id="Ort" title="Wo findest du uns?" className="bg-2">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <p>Unsere Adresse lautet:<br /> {address}</p>
                    <p>What3Words:<br /><a href="https://w3w.co/stehen.stetig.mächtig" style={{ color: '#dddddd' }}>///stehen.stetig.mächtig</a></p>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div style={{
                        width: '100%',
                        height: '30vh'
                    }} id="map"></div>
                    <small>
                        <a href={"http://www.openstreetmap.org/?mlat=" + pos.lat + "&amp;mlon=" + pos.lon + "#map=18/" + pos.lat + "/" + pos.lon}
                            target="_blank" rel="noreferrer" style={{ color: '#dddddd' }}>
                            <i>Große Karte anzeigen</i>
                            </a>
                    </small>
                </div>
                <div className="col-md-12 col-lg-4">
                    <p>Wenn der vspace.one offen ist kannst du uns auch anrufen.</p>
                    <p>Telefon: <a href={"tel:" + phone} style={{ color: '#dddddd' }}>{phone}</a></p>
                </div>
            </div>
            
        </PageBox>
    );
}


export default HomePosition