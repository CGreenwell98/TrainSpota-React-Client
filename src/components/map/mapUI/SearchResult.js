import React, { useContext } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import { MapContext } from "../../../context/MapContext";

const SearchResult = ({ stationInfo }) => {
  const { getStationTrainData, setCurrentStation } = useContext(
    RailwayDataContext
  );
  const { addStationMarker } = useContext(MapContext);

  const { station_code, name, latitude, longitude } = stationInfo;

  const onResultClick = () => {
    getStationTrainData(station_code);
    setCurrentStation({
      name,
      code: station_code,
      coords: [latitude, longitude],
    });
    addStationMarker({ name, coords: [latitude, longitude] });
  };

  return (
    <div onClick={onResultClick} className="result-box">
      <b>{station_code}</b>
      <p>{name}</p>
    </div>
  );
};

export default SearchResult;
