import React from "react";

import AddMarker from "./AddMarker";

const StationMarkers = ({ stationMarkerList }) => {
  const renderedMarkers = stationMarkerList.map(({ coords, name }) => {
    return <AddMarker key={name} position={coords} text={name} />;
  });

  return <>{renderedMarkers}</>;
};

export default StationMarkers;
