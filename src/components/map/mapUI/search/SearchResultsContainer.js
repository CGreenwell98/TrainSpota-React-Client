import React, { useState, useContext, useEffect } from "react";
import { RailwayDataContext } from "../../../../context/RailwayDataContext";
import SearchResults from "../results/Results";
import TrainResults from "./TrainResults";
import "./searchResultsContainer.css";

const SearchResultsContainer = () => {
  const [containerHidden, setContainerHidden] = useState(true);
  const {
    dataTypeVisible,
    currentStation,
    searchedStations,
    stationTrainData,
  } = useContext(RailwayDataContext);

  useEffect(() => {
    if (searchedStations.length || stationTrainData.length)
      setContainerHidden(false);
  }, [searchedStations, stationTrainData]);

  return (
    <div
      className={`search-result-container ${
        !containerHidden ? "search-result-container-active" : ""
      }`}
    >
      {dataTypeVisible === "search" ? (
        <SearchResults
          resultType="search results"
          stations={searchedStations}
        />
      ) : (
        <TrainResults
          stationTrainData={stationTrainData}
          currentStation={currentStation}
        />
      )}
    </div>
  );
};

export default SearchResultsContainer;
