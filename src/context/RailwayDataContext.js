import React, { createContext } from "react";
import useStationSearch from "../hooks/apis/useStationSearch";

export const RailwayDataContext = createContext();

export const RailwayDataProvider = (props) => {
  const [searchedStations, stationSearch] = useStationSearch();

  return (
    <RailwayDataContext.Provider value={{ searchedStations, stationSearch }}>
      {props.children}
    </RailwayDataContext.Provider>
  );
};
