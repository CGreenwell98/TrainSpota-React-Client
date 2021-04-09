import React, { useState, useContext, useEffect } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import { MapContext } from "../../../context/MapContext";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrainButtonBox = ({
  currentStation,
  passBtnActive,
  setPassBtnActive,
}) => {
  const { getStationTrainData } = useContext(RailwayDataContext);
  const {
    stationMarkerList,
    addStationMarker,
    removeStationMarker,
  } = useContext(MapContext);
  const [markerBtnActive, setMarkerBtnActive] = useState(
    stationMarkerList.some((station) => station.name === currentStation.name)
  );

  const onTrainBtnClick = (e) => {
    if (e.target.classList.contains("train-type-btn-active")) return;
    setPassBtnActive(!passBtnActive);
    getStationTrainData(currentStation.code, e.target.dataset.traintype);
  };

  const onMarkerButtonClick = () => {
    if (!markerBtnActive) addStationMarker(currentStation);
    if (markerBtnActive) removeStationMarker(currentStation);
    setMarkerBtnActive(!markerBtnActive);
  };

  return (
    <div className="train-btn-box">
      <div>
        <button
          className={`btn train-type-btn ${
            !passBtnActive && "train-type-btn-active"
          }`}
          onClick={onTrainBtnClick}
          data-traintype="stopping"
        >
          Stopping
        </button>
        <button
          className={`btn train-type-btn ${
            passBtnActive && "train-type-btn-active"
          }`}
          onClick={onTrainBtnClick}
          data-traintype="pass"
        >
          Passing
        </button>
      </div>

      <div>
        <FontAwesomeIcon
          className={`btn station-marker-btn ${
            markerBtnActive && "station-marker-btn-active"
          }`}
          icon={faMapMarkerAlt}
          onClick={onMarkerButtonClick}
        />
        <FontAwesomeIcon className="btn fav-station-btn" icon={faStar} />
      </div>
    </div>
  );
};

export default TrainButtonBox;
