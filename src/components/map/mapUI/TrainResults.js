import React, { useEffect, useState } from "react";
import TrainResult from "./TrainResult";
import TrainButtonBox from "./TrainButtonBox";
import LoadingDots from "./LoadingDots";
import "./trainResults.css";

const TrainResults = ({ currentStation, stationTrainData }) => {
  const [passBtnActive, setPassBtnActive] = useState(false);
  const [showLoadingDots, setShowLoadingDots] = useState(false);

  useEffect(() => {
    setShowLoadingDots(true);
  }, [passBtnActive]);

  useEffect(() => {
    setShowLoadingDots(true);
    setPassBtnActive(false);
  }, [currentStation]);

  useEffect(() => {
    setShowLoadingDots(false);
  }, [stationTrainData]);

  if (!stationTrainData) return null;
  const renderedTrainData = stationTrainData.map((data) => {
    return (
      <TrainResult
        key={data.train_uid}
        data={data}
        passBtnActive={passBtnActive}
      />
    );
  });

  return (
    <>
      <TrainButtonBox
        currentStation={currentStation}
        passBtnActive={passBtnActive}
        setPassBtnActive={setPassBtnActive}
      />
      <h3>
        <b>{currentStation.code}</b>
        {currentStation.name}
      </h3>
      {showLoadingDots ? (
        <LoadingDots />
      ) : (
        <div className="search-results">
          {renderedTrainData.length ? (
            renderedTrainData
          ) : (
            <p>No train data found</p>
          )}
        </div>
      )}
    </>
  );
};

export default TrainResults;
