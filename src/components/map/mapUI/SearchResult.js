import React, { useContext } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const SearchResult = ({ stationName, stationCode }) => {
  const { getStationTrainData } = useContext(RailwayDataContext);

  return (
    <div
      onClick={() => getStationTrainData(stationCode)}
      className="result-box"
    >
      <b>{stationCode}</b>
      <p>{stationName}</p>
    </div>
  );
};

export default SearchResult;
