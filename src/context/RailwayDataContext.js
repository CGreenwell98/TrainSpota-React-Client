import React, { createContext } from "react";
import useStationSearch from "../hooks/apis/useStationSearch";
import useStationTrains from "../hooks/apis/useStationTrains";

export const RailwayDataContext = createContext();

export const RailwayDataProvider = (props) => {
  const [searchedStations, stationSearch] = useStationSearch();
  const [stationTrainData, getStationTrainData] = useStationTrains();

  return (
    <RailwayDataContext.Provider
      value={{
        searchedStations,
        stationSearch,
        stationTrainData,
        getStationTrainData,
      }}
    >
      {props.children}
    </RailwayDataContext.Provider>
  );
};
