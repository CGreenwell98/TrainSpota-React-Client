import React from "react";
import SearchResult from "./SearchResult";
import "./searchResults.css";

const SearchResults = ({ searchedStations }) => {
  const renderedResults = searchedStations.map(
    ({ name: stationName, station_code }) => {
      return (
        <SearchResult
          key={station_code}
          stationName={stationName}
          stationCode={station_code}
        />
      );
    }
  );

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
