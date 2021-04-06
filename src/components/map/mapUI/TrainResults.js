import React from "react";
import TrainResult from "./TrainResult";
import "./trainResults.css";

const TrainResults = ({ stationTrainData }) => {
  const renderedTrainData = stationTrainData.map((data) => {
    return <TrainResult data={data} />;
  });

  return (
    <>
      <div className="train-btn-box"></div>
      <div className="search-results">{renderedTrainData}</div>
    </>
  );
};

export default TrainResults;
