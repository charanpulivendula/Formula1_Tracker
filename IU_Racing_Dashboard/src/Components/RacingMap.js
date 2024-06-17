import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import racingmap from '../Assets/racing_map.png';
import racingZoom from '../Assets/racing_zoom.png';
import GMap from './GMap';

const libraries = ['places'];



const RacingMap = () => {
  const [mapType, setMapType] = useState('google'); // Default to racing map

  const handleMapChange = (event) => {
    setMapType(event.target.value);
  };

  const racingMap = (
    <div className=''>
      <img
        alt="Mask group"
        src={racingZoom}
        width={1399}
        height={1042}
      />
      <div />
      <img
        alt="Group"
        src={racingmap}
        width={1399}
        height={700}
      />
    </div>
  );


  const selectedMap = mapType === 'racing' ? racingMap : <GMap/>;

  return (
    <div className='flex-col w-4/5 ml-10 h-full'>
      <select
        className=''
        style={{ color: "#000" }}
        value={mapType}
        onChange={handleMapChange}
      >
        <option value="racing">Racing Map</option>
        <option value="google">Google Map</option>
      </select>
      {selectedMap}
    </div>
  );
};

export default RacingMap;
