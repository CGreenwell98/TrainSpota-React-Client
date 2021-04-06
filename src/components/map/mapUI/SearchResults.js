import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = ({ searchedStations }) => {
  const renderedResults = searchedStations.map((station) => {
    return (
      <SearchResult
        key={station.station_code}
        stationName={station.name}
        stationCode={station.station_code}
      />
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
