import React from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faSearch,
  faMapMarkerAlt,
  faMap,
  faSubway,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";

const MapSideBar = () => {
  return (
    <div className="side-bar">
      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faHome} />
      </Link>
      <FontAwesomeIcon className="icon" data-name="search" icon={faSearch} />
      <FontAwesomeIcon
        className="icon"
        data-name="curLocation"
        icon={faMapMarkerAlt}
      />
      <FontAwesomeIcon className="icon" data-name="mapType" icon={faMap} />
      <FontAwesomeIcon
        className="icon"
        data-name="trainRoutes"
        icon={faSubway}
      />
    </div>
  );
};

export default MapSideBar;
