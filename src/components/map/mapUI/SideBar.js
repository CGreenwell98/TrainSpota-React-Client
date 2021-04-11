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
  searchHidden,
  setSearchHidden,
  setFavouritesHidden,
  favouritesHidden,
}) => {
  const onSearchBtnClick = () => {
    if (!favouritesHidden) setFavouritesHidden(true);
    setSearchHidden(!searchHidden);
    if (!searchHidden) searchForm.current.focus();
  };

  const onFavBtnClick = () => {
    if (!searchHidden) setSearchHidden(true);
    setFavouritesHidden(!favouritesHidden);
  };

  return (
    <div className="side-bar">
      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faHome} title="home" />
      </Link>
      <FontAwesomeIcon
        onClick={onSearchBtnClick}
        className="icon"
        data-name="search"
        icon={faSearch}
        title="search"
      />
      <FontAwesomeIcon
        onClick={() => findLocation()}
        className="icon"
        data-name="curLocation"
        icon={faLocationArrow}
        title="location"
      />
      <FontAwesomeIcon
        className="icon"
        data-name="mapType"
        icon={faMap}
        title="map layers"
      />
      <FontAwesomeIcon
        className="icon"
        data-name="trainRoutes"
        icon={faStar}
        onClick={onFavBtnClick}
        title="favourites"
      />
    </div>
  );
};

export default SideBar;
