import React from "react";
import SearchResult from "./SearchResult";
import "./searchResults.css";

const SearchResults = ({ searchedStations }) => {
  const renderedResults = searchedStations.map((stationInfo) => {
    return (
      <SearchResult key={stationInfo.station_code} stationInfo={stationInfo} />
    );
  });

  return (
    <div className="search-results">
      {renderedResults.length ? (
        <small>Search results</small>
      ) : (
        <p>No search results found</p>
      )}
      {renderedResults}
    </div>
  );
};

export default SearchResults;
