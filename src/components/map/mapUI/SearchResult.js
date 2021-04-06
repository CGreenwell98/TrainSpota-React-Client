import React from "react";

const SearchResult = ({ stationName, stationCode }) => {
  return (
    <div className="result-box">
      <b>{stationCode}</b>
      <p>{stationName}</p>
    </div>
  );
};

export default SearchResult;
