import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./mapOptionBtn.css";

const MapOptionBtn = ({
  mapLayer,
  text,
  layerType,
  mapLayersActive,
  setMapLayersActive,
}) => {
  const btnActive = mapLayersActive[layerType] === mapLayer;

  const onBtnClick = () => {
    setMapLayersActive((prevLayers) => {
      return {
        ...prevLayers,
        [layerType]: mapLayer,
      };
    });
  };

  return (
    <div
      className={`map-option-btn btn ${btnActive && "map-option-active"}`}
      onClick={onBtnClick}
    >
      <p>{text}</p>
      {btnActive && (
        <FontAwesomeIcon className="icon check-icon" icon={faCheck} />
      )}
    </div>
  );
};

export default MapOptionBtn;
