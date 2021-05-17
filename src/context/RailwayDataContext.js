import React, { createContext, useEffect, useState } from "react";
import useStationSearch from "../hooks/apis/useStationSearch";
import useStationTrains from "../hooks/apis/useStationTrains";
import useStationLocate from "../hooks/apis/useStationLocate";
import useTrainService from "../hooks/apis/useTrainService";

export const RailwayDataContext = createContext();

export const RailwayDataProvider = (props) => {
  const [searchedStations, stationSearch] = useStationSearch();
  const [stationTrainData, getStationTrainData] = useStationTrains();
  const [findClosestStation] = useStationLocate();
  const [trainServiceData, getTrainServiceData] = useTrainService();
  const [dataTypeVisible, setDataTypeVisible] = useState("");
  const [currentStation, setCurrentStation] = useState({});

  useEffect(() => {
    setDataTypeVisible("search");
  }, [searchedStations]);

  useEffect(() => {
    setDataTypeVisible("stationTrains");
  }, [stationTrainData]);

  return (
    <RailwayDataContext.Provider
      value={{
        dataTypeVisible,
        currentStation,
        setCurrentStation,
        searchedStations,
        stationSearch,
        stationTrainData,
        getStationTrainData,
        findClosestStation,
        trainServiceData,
        getTrainServiceData,
      }}
    >
      {props.children}
    </RailwayDataContext.Provider>
  );
};
