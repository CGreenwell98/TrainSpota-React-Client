import React, { useContext } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const SearchResult = ({ stationInfo }) => {
  const { getStationTrainData, setCurrentStation } = useContext(
    RailwayDataContext
  );

  const { station_code, name, latitude, longitude } = stationInfo;

  const onResultClick = () => {
    getStationTrainData(station_code);
    setCurrentStation({
      name,
      code: station_code,
      coords: [latitude, longitude],
    });
  };

  return (
    <div onClick={onResultClick} className="result-box">
      <b>{station_code}</b>
      <p>{name}</p>
    </div>
  );
};

export default SearchResult;
