import React, { createContext, useState } from "react";
import useStationMarkerList from "../hooks/useStationMarkerList";

export const MapContext = createContext();

export const MapContextProvider = (props) => {
  const [
    stationMarkerList,
    addStationMarker,
    removeStationMarker,
  ] = useStationMarkerList();
  const [mapLayersList, setMapLayersList] = useState([
    "openStreetMap",
    "openRailwayMap",
  ]);

  return (
    <MapContext.Provider
      value={{
        stationMarkerList,
        addStationMarker,
        removeStationMarker,
        mapLayersList,
        setMapLayersList,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
