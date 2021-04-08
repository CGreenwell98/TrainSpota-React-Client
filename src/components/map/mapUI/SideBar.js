import React from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faSearch,
  faLocationArrow,
  faMap,
  faSubway,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";

const SideBar = ({ searchForm, findLocation, setSearchHidden }) => {
  return (
    <div className="side-bar">
      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faHome} />
      </Link>
      <FontAwesomeIcon
        onClick={() => {
          setSearchHidden(false);
          searchForm.current.focus();
        }}
        className="icon"
        data-name="search"
        icon={faSearch}
      />
      <FontAwesomeIcon
        onClick={() => findLocation()}
        className="icon"
        data-name="curLocation"
        icon={faLocationArrow}
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

export default SideBar;
