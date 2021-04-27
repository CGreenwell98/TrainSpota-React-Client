import React from "react";
import SearchResult from "./Result";
import "./results.css";

const SearchResults = ({ stations, resultType, setContainerVisible }) => {
  const renderedResults = stations.map((stationInfo) => {
    return (
      <SearchResult
        key={stationInfo.code}
        stationInfo={stationInfo}
        resultType={resultType}
        setContainerVisible={setContainerVisible}
      />
    );
  });

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="search-results">
      {renderedResults.length ? (
        <small>{capitalize(resultType)}</small>
      ) : (
        <p>No {resultType} found</p>
      )}
      {renderedResults}
    </div>
  );
};

export default SearchResults;
