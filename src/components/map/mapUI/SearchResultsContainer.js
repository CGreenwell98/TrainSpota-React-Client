import React, { useState, useContext, useEffect } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import SearchResults from "./SearchResults";
import "./searchResultsContainer.css";

const SearchResultsContainer = () => {
  const [containerHidden, setContainerHidden] = useState(true);
  const { searchedStations } = useContext(RailwayDataContext);

  useEffect(() => {
    if (searchedStations.length) setContainerHidden(false);
  }, [searchedStations]);

  return (
    <div
      className={`search-result-container ${
        !containerHidden ? "search-result-container-active" : ""
      }`}
    >
      <div className="train-btn-box"></div>
      <SearchResults searchedStations={searchedStations} />
      <div className="loading-dots loading-dots-hidden">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default SearchResultsContainer;
