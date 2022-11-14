import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import CustomMarker from './CustomMarker';

function Mapbox({ coordinates = {}, requests, onClickMap, strategyType, onClickMarker }) {
  const [viewport, setViewport] = useState({ zoom: 11 });

  function renderMarker(coordinates, requests) {
    const strategies = { currentPosition: renderCurrentPosition, requests: renderRequests };
    return strategies[strategyType]({ coordinates, requests, onClickMarker });
  }

  // function handleClickOnMap() {}

  useEffect(() => {
    if (Object.keys(coordinates).length) setViewport((viewport) => ({ ...viewport, ...coordinates }));
  }, [coordinates]);

  return (
    <ReactMapGL
      {...viewport}
      width='100%'
      height='384px'
      mapStyle='mapbox://styles/mapbox/dark-v9'
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken='pk.eyJ1Ijoicm9tZWx1cyIsImEiOiJja3JuaGVkYWcxdzVjMnFwdm05MjZkbW83In0.JrP6u64B1-uzsGkpFHpejw'
      onClick={onClickMap}>
      {renderMarker(coordinates, requests)}
    </ReactMapGL>
  );
}

function renderCurrentPosition({ coordinates = {} }) {
  return <CustomMarker data={coordinates} onClickMarker={() => null} />;
}

function renderRequests({ requests = [], onClickMarker }) {
  return requests?.map(request => <CustomMarker key={request.id} data={request} onClickMarker={onClickMarker} />);
}

export default Mapbox;