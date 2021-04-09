import React, { createContext } from "react";
import useStationMarkerList from "../hooks/useStationMarkerList";

export const MapContext = createContext();

export const MapContextProvider = (props) => {
  const [
    stationMarkerList,
    addStationMarker,
    removeStationMarker,
  ] = useStationMarkerList();

  return (
    <MapContext.Provider
      value={{ stationMarkerList, addStationMarker, removeStationMarker }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
