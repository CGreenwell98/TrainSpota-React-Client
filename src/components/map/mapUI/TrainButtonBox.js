import React, { useContext } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const TrainButtonBox = ({
  currentStation,
  passBtnActive,
  setPassBtnActive,
}) => {
  const { getStationTrainData } = useContext(RailwayDataContext);

  const onBtnClick = (e) => {
    if (e.target.classList.contains("train-type-btn-active")) return;
    setPassBtnActive(!passBtnActive);
    getStationTrainData(currentStation.code, e.target.dataset.traintype);
  };

  return (
    <div className="train-btn-box">
      <button
        className={`btn train-type-btn ${
          !passBtnActive && "train-type-btn-active"
        }`}
        onClick={onBtnClick}
        data-traintype="stopping"
      >
        Stopping
      </button>
      <button
        className={`btn train-type-btn ${
          passBtnActive && "train-type-btn-active"
        }`}
        onClick={onBtnClick}
        data-traintype="pass"
      >
        Passing
      </button>
    </div>
  );
};

export default TrainButtonBox;
