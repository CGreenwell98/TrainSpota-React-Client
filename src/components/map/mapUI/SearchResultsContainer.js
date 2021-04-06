import React, { useState, useContext, useEffect } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import SearchResults from "./SearchResults";
import TrainResults from "./TrainResults";
import "./searchResultsContainer.css";

const SearchResultsContainer = () => {
  const [containerHidden, setContainerHidden] = useState(true);
  const { searchedStations, stationTrainData } = useContext(RailwayDataContext);

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
      <SearchResults searchedStations={searchedStations} />
      <TrainResults stationTrainData={stationTrainData} />
      <div className="loading-dots loading-dots-hidden">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default SearchResultsContainer;
