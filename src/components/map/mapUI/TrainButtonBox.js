import React, { useState, useContext } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import { MapContext } from "../../../context/MapContext";
import { UserContext } from "../../../context/UserContext";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrainButtonBox = ({
  currentStation,
  passBtnActive,
  setPassBtnActive,
}) => {
  const { getStationTrainData } = useContext(RailwayDataContext);
  const {
    favouriteStations,
    addFavouriteStation,
    removeFavouriteStation,
  } = useContext(UserContext);
  const {
    stationMarkerList,
    addStationMarker,
    removeStationMarker,
  } = useContext(MapContext);
  const [markerBtnActive, setMarkerBtnActive] = useState(
    stationMarkerList.some((station) => station.name === currentStation.name)
  );
  const [favStationBtnActive, setFavStationBtnActive] = useState(
    favouriteStations.some((station) => station.name === currentStation.name)
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

  const onFavouriteBtnClick = () => {
    if (!favStationBtnActive) addFavouriteStation(currentStation);
    if (favStationBtnActive) removeFavouriteStation(currentStation);
    setFavStationBtnActive(!favStationBtnActive);
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
          title="add marker"
        />
        <FontAwesomeIcon
          className={`btn fav-station-btn ${
            favStationBtnActive && "fav-station-btn-active"
          }`}
          icon={faStar}
          onClick={onFavouriteBtnClick}
          title="favourite"
        />
      </div>
    </div>
  );
};

export default TrainButtonBox;
