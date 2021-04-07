import React, { useContext } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const SearchResult = ({ stationName, stationCode }) => {
  const { getStationTrainData, setCurrentStation } = useContext(
    RailwayDataContext
  );

  const onResultClick = () => {
    getStationTrainData(stationCode);
    setCurrentStation({ name: stationName, code: stationCode });
  };

  return (
    <div onClick={onResultClick} className="result-box">
      <b>{stationCode}</b>
      <p>{stationName}</p>
    </div>
  );
};

export default SearchResult;
