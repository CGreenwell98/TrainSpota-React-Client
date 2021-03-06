import React, { useContext } from "react";
import { RailwayDataContext } from "../../../../context/RailwayDataContext";

const SearchResult = ({ stationInfo, resultType, setContainerVisible }) => {
  const { getStationTrainData, setCurrentStation } = useContext(
    RailwayDataContext
  );

  const { code, name } = stationInfo;

  const onResultClick = () => {
    getStationTrainData(code);
    setCurrentStation(stationInfo);
    if (resultType === "favourite stations") {
      setContainerVisible("search");
    }
  };

  return (
    <div onClick={onResultClick} className="result-box">
      <b>{code}</b>
      <p>{name}</p>
    </div>
  );
};

export default SearchResult;
