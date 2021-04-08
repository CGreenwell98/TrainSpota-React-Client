import React, { useContext } from "react";
import { MapContext } from "../../../context/MapContext";
import AddMarker from "./AddMarker";

const StationMarkers = () => {
  const { stationMarkerList } = useContext(MapContext);

  const renderedMarkers = stationMarkerList.map(({ coords, name }) => {
    return <AddMarker key={name} position={coords} text={name} />;
  });

  return <>{renderedMarkers}</>;
};

export default StationMarkers;
