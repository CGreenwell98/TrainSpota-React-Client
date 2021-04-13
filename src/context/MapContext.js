import React, { createContext, useState } from "react";
import useStationMarkerList from "../hooks/useStationMarkerList";

export const MapContext = createContext();

export const MapContextProvider = (props) => {
  const [
    stationMarkerList,
    addStationMarker,
    removeStationMarker,
  ] = useStationMarkerList();
  const [mapLayersActive, setMapLayersActive] = useState({
    map: "openStreetMap",
    railway: "railwayOperator",
  });

  return (
    <MapContext.Provider
      value={{
        stationMarkerList,
        addStationMarker,
        removeStationMarker,
        mapLayersActive,
        setMapLayersActive,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
