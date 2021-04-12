import React, { useState, useContext, useMemo } from "react";
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
  const [markerBtnActive, setMarkerBtnActive] = useState(false);
  const [favStationBtnActive, setFavStationBtnActive] = useState(false);

  useMemo(() => {
    setMarkerBtnActive(
      stationMarkerList.some((station) => station.name === currentStation.name)
    );
    setFavStationBtnActive(
      favouriteStations.some((station) => station.name === currentStation.name)
    );
  }, [currentStation, stationMarkerList, favouriteStations]);

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
    const { distance, ...favStation } = currentStation;
    if (!favStationBtnActive) addFavouriteStation(favStation);
    if (favStationBtnActive) removeFavouriteStation(favStation);
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
