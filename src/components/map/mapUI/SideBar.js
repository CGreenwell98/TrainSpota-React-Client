import React from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faSearch,
  faLocationArrow,
  faMap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";

const SideBar = ({
  searchForm,
  findLocation,
  containerVisible,
  setContainerVisible,
}) => {
  const onBtnClick = (btnType) => {
    console.log(btnType);
    if (btnType === containerVisible) {
      setContainerVisible("");
    } else {
      setContainerVisible(btnType);
      if (btnType === "search") searchForm.current.focus();
    }
  };

  return (
    <div className="side-bar">
      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faHome} title="home" />
      </Link>
      <FontAwesomeIcon
        onClick={() => onBtnClick("search")}
        className="icon"
        name="search"
        icon={faSearch}
        title="search"
      />
      <FontAwesomeIcon
        onClick={() => findLocation()}
        className="icon"
        name="curLocation"
        icon={faLocationArrow}
        title="location"
      />
      <FontAwesomeIcon
        onClick={() => onBtnClick("mapType")}
        className="icon"
        name="mapType"
        icon={faMap}
        title="map layers"
      />
      <FontAwesomeIcon
        onClick={() => onBtnClick("favourites")}
        className="icon"
        name="favourites"
        icon={faStar}
        title="favourites"
      />
    </div>
  );
};

export default SideBar;
